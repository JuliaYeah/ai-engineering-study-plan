// Local server for the study pages: node study-tools/server.cjs [port]   (default 5510, 127.0.0.1 only)
// 5510, not 5500: VS Code's Live Server uses 5500 and cannot save progress.
//   - serves the repo as static files
//   - GET  /api/progress  -> { ticks, notes }
//   - POST /api/progress  -> tick / untick / course name; writes study-progress.json and mirrors it into the timetable .md
//   - POST /api/sync      -> commit the progress files, pull --rebase, then push unless {push:false} (only when a page button is clicked)
//   - GET  /api/applications, /career-ops/reports/*.html -> jobs applied for per day and their evaluation reports, read live from the
//                           private career-ops repo (CAREER_OPS_DIR, or a sibling folder named career-ops); never copied into this repo
// Deliberately does not require layout.cjs: it never moves files.
const http = require('http'), fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');
const progress = require('./progress.cjs');
const applications = require('./applications.cjs');

const root = path.resolve(__dirname, '..');
const port = +process.argv[2] || 5510;
const MD = 'Reports/AI_ENGINEER_TRANSITION_PLAN.md';
const FILES = ['study-progress.json', MD];
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.ipynb': 'application/json; charset=utf-8', '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.yaml': 'text/plain; charset=utf-8', '.csv': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.ico': 'image/x-icon',
};

function syncMd() {
  const f = path.join(root, MD);
  if (!fs.existsSync(f)) return false;
  const a = fs.readFileSync(f, 'utf8'), b = progress.applyToMd(a, progress.load());
  if (a === b) return false;
  fs.writeFileSync(f + '.tmp', b);
  fs.renameSync(f + '.tmp', f);
  return true;
}

function git(log, ...args) {
  try {
    const out = execFileSync('git', args, { cwd: root, encoding: 'utf8', timeout: 120000, stdio: ['ignore', 'pipe', 'pipe'] });
    log.push('git ' + args.join(' '));
    return out;
  } catch (e) {
    e.msg = `git ${args.join(' ')}: ${(e.stderr || e.stdout || e.message || '').toString().trim()}`;
    throw e;
  }
}

// Ticks and course names are a set: when two devices changed neighbouring lines, keep both instead of failing.
// Only the two progress files are resolved this way; a conflict anywhere else aborts the rebase and is reported.
function resolveConflicts(log, original) {
  const abort = () => { try { git(log, 'rebase', '--abort'); } catch (_) { /* nothing to abort */ } };
  const conflicts = () => { try { return git(log, 'diff', '--name-only', '--diff-filter=U').split('\n').map(s => s.trim()).filter(Boolean); } catch (_) { return []; } };
  for (let i = 0; i < 20; i++) {
    const c = conflicts();
    if (!c.length || !c.every(f => FILES.includes(f))) { abort(); throw original; }
    try {
      if (c.includes('study-progress.json')) {
        // 3-way merge per key against the common ancestor (:1:), so an un-tick on one device is not brought back by the other.
        // :2: = upstream, :3: = the commit being replayed (this device). If both changed the same key, this device wins.
        let base = {}; try { base = JSON.parse(git(log, 'show', ':1:study-progress.json')); } catch (_) { /* no common ancestor: treat as empty */ }
        const up = JSON.parse(git(log, 'show', ':2:study-progress.json')), mine = JSON.parse(git(log, 'show', ':3:study-progress.json'));
        const merge3 = (b = {}, o = {}, t = {}) => {
          const out = {};
          for (const k of new Set([...Object.keys(b), ...Object.keys(o), ...Object.keys(t)])) {
            const v = o[k] === t[k] ? o[k] : o[k] === b[k] ? t[k] : t[k] === b[k] ? o[k] : t[k];
            if (v !== undefined) out[k] = v;
          }
          return out;
        };
        progress.save({ ticks: merge3(base.ticks, up.ticks, mine.ticks), notes: merge3(base.notes, up.notes, mine.notes) });
      }
      if (c.includes(MD)) {
        const upstream = git(log, 'show', ':2:' + MD);
        fs.writeFileSync(path.join(root, MD), progress.applyToMd(upstream, progress.load()));
      }
      git(log, 'add', '--', ...c);
    } catch (e) { abort(); throw e; }
    try { git(log, '-c', 'core.editor=true', 'rebase', '--continue'); return; } catch (e) { original = e; }   // next commit may conflict too
  }
  abort(); throw original;
}

function sync(push = true) {
  const log = [];
  const commitIfNeeded = () => {
    git(log, 'add', '--', ...FILES);
    let changed = true;
    try { git(log, 'diff', '--cached', '--quiet', '--', ...FILES); changed = false; } catch (e) { if (e.status !== 1) throw e; }
    if (changed) git(log, 'commit', '-m', 'Update study progress', '--', ...FILES);
  };
  try {
    syncMd();
    commitIfNeeded();
    try { git(log, 'pull', '--rebase', '--autostash'); } catch (e) { resolveConflicts(log, e); }
    syncMd();            // progress may have come from another device: mirror it into the Markdown
    commitIfNeeded();
    if (push) git(log, 'push');
    return { ok: true, message: push ? '已推送' : '已拉取', log, state: progress.load() };
  } catch (e) {
    return { ok: false, message: e.msg || String(e), log, state: progress.load() };
  }
}

const send = (res, code, body, type = 'application/json; charset=utf-8') => {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
};

// Only this machine, only our own pages: stops other websites open in the browser (CSRF, DNS rebinding) from writing.
function allowed(req) {
  const host = (req.headers.host || '').replace(/:\d+$/, '');
  if (host !== '127.0.0.1' && host !== 'localhost') return 'bad host';
  const o = req.headers.origin;
  if (o && o !== `http://127.0.0.1:${port}` && o !== `http://localhost:${port}`) return 'bad origin';
  if (req.method === 'POST' && (!/^application\/json/.test(req.headers['content-type'] || '') || req.headers['x-study'] !== '1')) return 'bad request headers';
  return '';
}

function readBody(req, cb) {
  let n = 0; const chunks = [];
  req.on('data', c => { n += c.length; if (n > 256 * 1024) req.destroy(); else chunks.push(c); });
  req.on('end', () => { try { cb(null, JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); } catch (e) { cb(e); } });
}

const KEY = /^day-\d{2}\.[a-z0-9]+$/;
function update(body) {
  const st = progress.load();
  const apply = (key, item) => {
    if (!KEY.test(key)) throw Error('bad key');
    if (key.endsWith('.course')) {
      const v = String(item.note || '').replace(/[\r\n]+/g, ' ').slice(0, 200).trim();
      if (v) st.notes[key] = v; else delete st.notes[key];
    } else if (item.done) st.ticks[key] = String(item.label || 'done').slice(0, 200);
    else delete st.ticks[key];
  };
  if (body.bulk) {                       // first visit: move ticks that were only in this browser to the server
    for (const [k, v] of Object.entries(body.bulk.ticks || {})) apply(k, { done: true, label: v });
    for (const [k, v] of Object.entries(body.bulk.notes || {})) apply(k, { note: v });
  } else apply(String(body.key || ''), body);
  progress.save(st);
  syncMd();
  return st;
}

function serveFile(req, res, file) {
  fs.stat(file, (e, st) => {
    if (e || !st.isFile()) return send(res, 404, 'not found', 'text/plain');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Content-Length': st.size, 'Cache-Control': 'no-cache' });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

http.createServer((req, res) => {
  let url;
  try { url = new URL(req.url, 'http://x'); } catch (e) { return send(res, 400, 'bad url', 'text/plain'); }
  if (url.pathname.startsWith('/api/')) {
    const why = allowed(req);
    if (why) return send(res, 403, { error: why });
    if (url.pathname === '/api/progress' && req.method === 'GET') return send(res, 200, progress.load());
    if (url.pathname === '/api/applications') {
      if (req.method !== 'GET') return send(res, 405, { error: 'read only' });
      const dir = applications.careerOpsDir(root);
      if (!dir) return send(res, 200, { error: '找不到 career-ops 仓库（放在本仓库旁边，或设置 CAREER_OPS_DIR）', byDate: {} });
      try { return send(res, 200, applications.load(dir)); } catch (e) { return send(res, 200, { error: e.message, byDate: {} }); }
    }
    if (req.method !== 'POST') return send(res, 405, { error: 'method' });
    if (url.pathname === '/api/progress') {
      return readBody(req, (err, body) => {
        if (err) return send(res, 400, { error: 'bad json' });
        try { send(res, 200, { ok: true, state: update(body) }); } catch (e) { send(res, 400, { error: e.message }); }
      });
    }
    if (url.pathname === '/api/sync') return readBody(req, (err, body) => send(res, 200, sync(!(body && body.push === false))));
    return send(res, 404, { error: 'not found' });
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'method not allowed', 'text/plain');
  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch (e) { return send(res, 400, 'bad path', 'text/plain'); }
  if (rel.startsWith('/career-ops/reports/')) {      // evaluation reports of the private career-ops repo: html only, this machine only
    if (allowed(req)) return send(res, 403, 'forbidden', 'text/plain');
    const dir = applications.careerOpsDir(root);
    if (!dir) return send(res, 404, 'career-ops not found', 'text/plain');
    const base = path.join(dir, 'reports'), f = path.resolve(base, rel.slice('/career-ops/reports/'.length));
    if (!f.startsWith(base + path.sep) || path.extname(f).toLowerCase() !== '.html') return send(res, 403, 'forbidden', 'text/plain');
    return serveFile(req, res, f);
  }
  if (rel === '/') { res.writeHead(302, { Location: '/AI_ENGINEER_DAILY_LEARNING_GUIDE.html' }); return res.end(); }
  const file = path.resolve(root, '.' + rel);
  if (file !== root && !file.startsWith(root + path.sep)) return send(res, 403, 'forbidden', 'text/plain');
  if (rel.split('/').some(p => p === '.git')) return send(res, 403, 'forbidden', 'text/plain');
  serveFile(req, res, file);
}).on('error', e => { console.error(e.code === 'EADDRINUSE' ? `Port ${port} is already in use.` : e.message); process.exit(1); })
  .listen(port, '127.0.0.1', () => {
    if (!fs.existsSync(progress.FILE)) progress.save(progress.load());
    const changed = syncMd();
    console.log(`Study server: http://127.0.0.1:${port}/  (progress: study-progress.json${changed ? ', timetable .md updated from it' : ''})`);
  });
