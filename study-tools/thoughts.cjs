// 随想笔记: quick thoughts, one Markdown note per name. On Reports/AI_ENGINEER_THOUGHTS.html type a note name - a new one,
// or pick one that exists - and the thought, then click Update: the local server creates "Study notes/thoughts/<name>.md",
// or adds the thought to the end of that note, under a "## <date> <time>" heading. The list beside the form shows every
// note, most recently updated first; click one to read it. The notes are pushed and pulled with the other study notes.
// "Study notes/thoughts/index.json" lists the notes for the web version (GitHub Pages, read only), which cannot list a
// folder. It is rebuilt from the .md files after every change and before every sync, so a note edited, renamed or
// deleted by hand in the folder is picked up.
const fs = require('fs'), path = require('path');

const FILE = 'AI_ENGINEER_THOUGHTS.html', TITLE = '随想笔记';
const DIR_REL = 'Study notes/thoughts', DIR = path.join(__dirname, '..', DIR_REL);
const INDEX_REL = DIR_REL + '/index.json', INDEX = path.join(DIR, 'index.json');
const PATH = /^Study notes\/thoughts\/(?:[^/]+\.md|index\.json)$/;      // the files the GitHub buttons sync
const HEAD = /^## (\d{4}-\d{2}-\d{2} \d{2}:\d{2})[ \t]*$/;               // the heading above each thought

// ---- a note: "# <name>", then one "## YYYY-MM-DD HH:MM" section per thought, oldest first
function parse(md) {
  const head = [], entries = [];
  let cur = null;
  for (const l of String(md || '').replace(/\r\n?/g, '\n').split('\n')) {
    const m = l.match(HEAD);
    if (m) entries.push(cur = { at: m[1], lines: [] });
    else (cur ? cur.lines : head).push(l);
  }
  const trim = a => a.join('\n').replace(/^\s*\n/, '').replace(/\s+$/, '');
  return { head: trim(head), entries: entries.map(e => ({ at: e.at, text: trim(e.lines) })) };
}
const serialize = ({ head, entries }) => head + '\n' + entries.map(e => `\n## ${e.at}\n\n${e.text}\n`).join('');

function info(name, md) {
  const { head, entries } = parse(md), ats = entries.map(e => e.at).sort();
  const last = entries.reduce((a, e) => (!a || e.at >= a.at ? e : a), null);
  const text = last ? last.text : head.replace(/^# .*(\n|$)/, '');
  return { name, count: entries.length, created: ats[0] || '', updated: ats[ats.length - 1] || '', preview: text.replace(/\s+/g, ' ').trim().slice(0, 80) };
}
function names() { try { return fs.readdirSync(DIR).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)); } catch (e) { return []; } }
const fileOf = n => path.join(DIR, n + '.md');
// newest first; notes without a dated thought (written by hand) last
function list() {
  return names().map(n => { try { return info(n, fs.readFileSync(fileOf(n), 'utf8')); } catch (e) { return null; } }).filter(Boolean)
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.name.localeCompare(b.name, 'zh'));
}
function writeAtomic(f, s) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f + '.tmp', s); fs.renameSync(f + '.tmp', f); }
// one note per line, sorted by name, so two devices merge cleanly in git; written only when it changed
function writeIndex() {
  const items = list();
  if (!items.length && !fs.existsSync(INDEX)) return false;
  const lines = items.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)).map(({ name, ...v }) => JSON.stringify(name) + ': ' + JSON.stringify(v));
  const s = '{\n' + lines.join(',\n') + '\n}\n';
  let old = null;
  try { old = fs.readFileSync(INDEX, 'utf8'); } catch (e) { /* first note */ }
  if (old === s) return false;
  writeAtomic(INDEX, s);
  return true;
}

// the name is the file name: no characters Windows or a URL cannot take, and not one of Windows' reserved names
function cleanName(s) {
  const n = String(s || '').replace(/\.md$/i, '').replace(/\s+/g, ' ').trim();
  if (!n) throw new Error('先填笔记的名字');
  if (n.length > 60) throw new Error('名字最多 60 个字');
  if (/[\\/:*?"<>|[\]#%\x00-\x1f]/.test(n)) throw new Error('名字里不能有 \\ / : * ? " < > | [ ] # %');
  if (/^\.|\.$/.test(n) || /^(con|prn|aux|nul|com\d|lpt\d)(\..*)?$/i.test(n)) throw new Error('这个名字不能当文件名，换一个');
  return n;
}
// Windows file names ignore case: "Idea" and "idea" are the same note
const find = n => names().find(x => x.toLowerCase() === n.toLowerCase());
const p2 = n => String(n).padStart(2, '0');
const stamp = (d = new Date()) => `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())} ${p2(d.getHours())}:${p2(d.getMinutes())}`;

// POST /api/thoughts {action: 'update', name, text} adds the thought to the note, creating it | {action: 'delete', name}
function handle(body) {
  const action = body.action || 'update', name = cleanName(body.name), have = find(name);
  if (action === 'delete') {
    if (!have) throw new Error('找不到这篇笔记');
    fs.unlinkSync(fileOf(have));
    writeIndex();
    return { ok: true, items: list(), message: '已删除「' + have + '」' };
  }
  if (action !== 'update') throw new Error('bad action');
  let text = String(body.text == null ? '' : body.text).replace(/\r\n?/g, '\n').replace(/^\s*\n/, '').replace(/\s+$/, '');
  if (!text.trim()) throw new Error('先写点内容');
  if (text.length > 20000) throw new Error('一次最多 20000 字');
  text = text.replace(/^(## \d{4}-\d{2}-\d{2} \d{2}:\d{2})/gm, '\\$1');   // would read back as the start of another thought
  // appended as text, so whatever was edited by hand in the file stays as it is
  const md = have ? fs.readFileSync(fileOf(have), 'utf8').replace(/\s*$/, '\n') : '# ' + name + '\n';
  writeAtomic(fileOf(have || name), md + `\n## ${stamp()}\n\n${text}\n`);
  writeIndex();
  return { ok: true, name: have || name, items: list(), message: have ? '已加到「' + have + '」' : '已新建「' + name + '」' };
}

// The same note changed on two devices (a sync conflict): every thought added on either device is kept, in time order;
// one deleted by hand on a device stays deleted. b = common ancestor, o = upstream, t = this device; null = no such file.
function merge(b, o, t) {
  if (o == null || t == null) return t ?? o;           // deleted on one device, changed on the other: keep the note
  const B = parse(b || ''), O = parse(o), T = parse(t), key = e => e.at + '\n' + e.text;
  const inB = new Set(B.entries.map(key)), inO = new Set(O.entries.map(key)), inT = new Set(T.entries.map(key));
  const out = [], seen = new Set();
  for (const e of [...O.entries, ...T.entries]) {
    const k = key(e);
    if (seen.has(k) || (inB.has(k) && !(inO.has(k) && inT.has(k)))) continue;
    seen.add(k); out.push(e);
  }
  out.sort((x, y) => x.at.localeCompare(y.at));
  return serialize({ head: T.head !== B.head ? T.head : O.head, entries: out });
}

// ---- the page
const style = `<style>
.th-grid{display:grid;grid-template-columns:minmax(220px,290px) minmax(0,1fr);gap:20px;align-items:start;margin-top:8px}
.th-side{background:#fff;border:1px solid #dce4ea;border-radius:12px;padding:10px;position:sticky;top:12px;max-height:calc(100vh - 24px);overflow:auto}
.th-side-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:0 4px 6px}
.th-side ul{list-style:none;margin:0;padding:0}
.th-item{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:none;border:0;border-radius:8px;padding:7px 10px;cursor:pointer}
.th-item:hover{background:#eef4f7}
.th-item.th-on{background:#e3f0f1;box-shadow:inset 3px 0 0 var(--accent)}
.th-name{display:block;font-weight:600;line-height:1.4;overflow-wrap:anywhere}
.th-meta{display:block;font-size:12px;line-height:1.5;color:#5b6b78}
.th-prev{display:block;font-size:13px;line-height:1.5;color:#526b7c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.th-empty{color:#5b6b78;font-size:14px;margin:6px 4px}
.th-form{display:flex;flex-direction:column;gap:6px}
.th-form[hidden]{display:none}
.th-form label{font-size:14px;color:#526b7c}
.th-form input{width:100%;padding:9px 12px}
.th-form textarea{width:100%;min-height:160px;resize:vertical;padding:10px 12px;border:1px solid #b4c9d4;border-radius:6px;font:inherit;line-height:1.6}
.th-actions{display:flex;align-items:center;gap:6px 12px;flex-wrap:wrap;margin-top:2px}
.th-btn{font:inherit;font-size:14px;cursor:pointer;border:1px solid #b4c9d4;border-radius:6px;background:#fff;color:#1d2b36;padding:3px 12px}
.th-btn[hidden]{display:none}
.th-primary{font-size:16px;padding:8px 24px;background:var(--accent);border-color:var(--accent);color:#fff}
.th-btn:disabled{opacity:.6;cursor:wait}
#th-msg{min-height:1.4em;margin:6px 0 10px}
.th-view{background:#fff;border:1px solid #dce4ea;border-radius:12px;padding:12px 18px}
.th-view[hidden]{display:none}
.th-view-head{display:flex;justify-content:space-between;align-items:baseline;gap:6px 12px;flex-wrap:wrap;border-bottom:1px solid #dce4ea;padding-bottom:8px}
.th-view h2{margin:0;font-size:20px;overflow-wrap:anywhere}
.th-entry{padding:10px 0;border-bottom:1px solid #eef2f5}
.th-entry:last-child{border-bottom:0}
.th-at{font-size:12px;color:#5b6b78}
.th-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65}
@media(max-width:760px){
 .th-grid{grid-template-columns:minmax(0,1fr)}
 .th-side{position:static;max-height:none;order:2}
 .th-main{order:1}
}
</style>`;

// browser side: the list from the server (or, on the web version, from the pushed index.json); a note is read from its
// .md file, which works on both; Update and delete go through the server
function client() {
  var online = false, items = [], current = '', busy = false, showing = 0, DRAFT = 'study-thought-draft';
  function $(id) { return document.getElementById(id); }
  function msg(t) { $('th-msg').textContent = t || ''; }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function post(body) {
    return fetch('/api/thoughts', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Study': '1' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || ('HTTP ' + r.status)); return j; }); });
  }
  function norm(s) { return String(s || '').replace(/\.md$/i, '').replace(/\s+/g, ' ').trim().toLowerCase(); }
  function find(name) { var n = norm(name); for (var i = 0; i < items.length; i++) if (n && items[i].name.toLowerCase() === n) return items[i]; return null; }
  function when(s) { var m = /^\d{4}-(\d{2})-(\d{2}) (\d{2}:\d{2})$/.exec(s || ''); return m ? (+m[1]) + '/' + (+m[2]) + ' ' + m[3] : ''; }
  function byUpdated(a, b) { return (b.updated || '').localeCompare(a.updated || '') || a.name.localeCompare(b.name, 'zh'); }

  function renderList() {
    var ul = $('th-list'), dl = $('th-names');
    ul.textContent = ''; dl.textContent = '';
    items.forEach(function (it) {
      var li = el('li'), b = el('button', 'th-item' + (it.name === current ? ' th-on' : ''));
      b.type = 'button';
      b.appendChild(el('span', 'th-name', it.name));
      b.appendChild(el('span', 'th-meta', [when(it.updated), it.count ? it.count + ' 条' : ''].filter(Boolean).join(' · ')));
      if (it.preview) b.appendChild(el('span', 'th-prev', it.preview));
      b.addEventListener('click', function () { pick(it.name, true); });
      li.appendChild(b); ul.appendChild(li);
      var o = el('option'); o.value = it.name; dl.appendChild(o);
    });
    $('th-count').textContent = items.length ? items.length + ' 篇笔记' : '';
    $('th-empty').hidden = items.length > 0;
  }
  // under the button: what Update will do with the name in the box
  function mode() {
    var name = $('th-name').value.replace(/\s+/g, ' ').trim(), it = find(name);
    $('th-mode').textContent = !name ? '先填 File name：新名字会新建一篇，已有的名字会加到那篇的最后'
      : it ? '会加到「' + it.name + '」的最后（Ctrl+Enter 也能保存）' : '会新建「' + name + '」（Ctrl+Enter 也能保存）';
  }
  function pick(name, fill) {
    if (fill) { $('th-name').value = name; saveDraft(); }
    current = name; renderList(); mode(); show(name);
    if (fill && online) $('th-text').focus();
  }

  // a note: thoughts newest first; links are clickable
  function parseMd(md) {
    var head = [], entries = [], cur = null;
    md.replace(/\r\n?/g, '\n').split('\n').forEach(function (l) {
      var m = /^## (\d{4}-\d{2}-\d{2} \d{2}:\d{2})[ \t]*$/.exec(l);
      if (m) entries.push(cur = { at: m[1], lines: [] }); else (cur ? cur.lines : head).push(l);
    });
    function trim(a) { return a.join('\n').replace(/^\s*\n/, '').replace(/\s+$/, '').replace(/^\\(## \d{4}-)/gm, '$1'); }
    return { head: trim(head).replace(/^# .*(\n|$)/, '').replace(/^\s*\n/, ''), entries: entries.map(function (e) { return { at: e.at, text: trim(e.lines) }; }) };
  }
  function linkify(parent, text) {
    var re = /https?:\/\/[^\s<>"'，。！）】]+/g, last = 0, m;
    while ((m = re.exec(text))) {
      var url = m[0].replace(/[),.;:!?]+$/, ''), a = el('a', '', url);
      parent.appendChild(document.createTextNode(text.slice(last, m.index)));
      a.href = url; a.target = '_blank'; a.rel = 'noopener'; parent.appendChild(a);
      last = re.lastIndex = m.index + url.length;
    }
    parent.appendChild(document.createTextNode(text.slice(last)));
  }
  function renderNote(view, name, md) {
    var n = parseMd(md), head = el('div', 'th-view-head'), right = el('span');
    view.textContent = '';
    head.appendChild(el('h2', '', name));
    right.appendChild(el('span', 'muted', n.entries.length ? n.entries.length + ' 条 · 最新的在上面 ' : ''));
    if (online) {
      var del = el('button', 'th-btn', '删除');
      del.type = 'button';
      del.addEventListener('click', function () { remove(name); });
      right.appendChild(del);
    }
    head.appendChild(right); view.appendChild(head);
    if (n.head) { var h = el('div', 'th-entry'), ht = el('div', 'th-text'); linkify(ht, n.head); h.appendChild(ht); view.appendChild(h); }
    n.entries.slice().reverse().forEach(function (e) {
      var box = el('div', 'th-entry'), t = el('div', 'th-text');
      box.appendChild(el('div', 'th-at', e.at));
      linkify(t, e.text); box.appendChild(t); view.appendChild(box);
    });
  }
  function show(name) {
    var view = $('th-view'), my = ++showing;
    if (!name) { view.hidden = true; view.textContent = ''; return; }
    view.hidden = false;
    if (!view.firstChild) view.textContent = '正在读取…';
    fetch('../Study%20notes/thoughts/' + encodeURIComponent(name) + '.md?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (md) { if (my === showing) renderNote(view, name, md); })
      .catch(function () { if (my === showing) view.textContent = '读不到这篇笔记。网页版要等电脑推送到 GitHub 以后才有。'; });
  }
  function remove(name) {
    if (!confirm('删除「' + name + '」？这篇笔记里的全部随想都会删掉。')) return;
    busy = true; msg('正在删除…');
    post({ action: 'delete', name: name }).then(function (j) {
      items = j.items;
      if (norm($('th-name').value) === norm(name)) { $('th-name').value = ''; saveDraft(); }
      current = ''; renderList(); mode(); show(''); msg(j.message);
    }).catch(function (e) { msg('删除失败：' + e.message); }).then(function () { busy = false; });
  }

  // what is typed stays in this browser until it is saved, so closing the page by accident loses nothing
  function saveDraft() { ls(DRAFT, JSON.stringify({ name: $('th-name').value, text: $('th-text').value })); }
  try { var d = JSON.parse(ls(DRAFT) || 'null'); if (d) { $('th-name').value = d.name || ''; $('th-text').value = d.text || ''; } } catch (e) { /* no draft */ }

  function setOnline(on) { online = on; $('th-form').hidden = !on; $('th-new').hidden = !on; }
  function after(first) {
    renderList(); mode();
    var it = find($('th-name').value);
    if (first) { if (it) pick(it.name, false); else if (!online && items.length) pick(items[0].name, false); }
    else if (current) { if (find(current)) show(current); else { current = ''; renderList(); show(''); } }
  }
  function load(first) {
    fetch('/api/thoughts', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { setOnline(true); items = j.items; after(first); })
      .catch(function () {
        // web version or no server: read the pushed index, read only
        var web = location.protocol !== 'file:' && ['127.0.0.1', 'localhost'].indexOf(location.hostname) < 0;
        setOnline(false);
        fetch('../Study%20notes/thoughts/index.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; })
          .then(function (all) {
            items = Object.keys(all).map(function (k) { var v = all[k]; v.name = k; return v; }).sort(byUpdated);
            after(first);
            msg(web ? '网页版只能看：在电脑上打开这个页面（本地服务器）才能写随想，推送到 GitHub 后这里会更新'
              : '没有连接本地服务器：只能看已经存过的笔记。运行 start-server.bat 后才能写');
          });
      });
  }

  $('th-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('th-name').value, text = $('th-text').value, b = $('th-save');
    if (!name.trim()) { msg('先填 File name：输入新名字，或者从列表里选一篇'); return $('th-name').focus(); }
    if (!text.trim()) { msg('先写点内容'); return $('th-text').focus(); }
    b.disabled = true; busy = true; msg('正在保存…');
    post({ action: 'update', name: name, text: text }).then(function (j) {
      items = j.items; $('th-name').value = j.name; $('th-text').value = ''; saveDraft();
      current = j.name; renderList(); mode(); show(j.name); msg(j.message);
    }).catch(function (e2) { msg('保存失败：' + e2.message); }).then(function () { b.disabled = false; busy = false; });
  });
  $('th-text').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); if ($('th-form').requestSubmit) $('th-form').requestSubmit(); else $('th-save').click(); }
  });
  $('th-text').addEventListener('input', saveDraft);
  $('th-name').addEventListener('input', function () {
    saveDraft(); mode();
    var it = find($('th-name').value);
    if (it && it.name !== current) pick(it.name, false);
    else if (!it && current) { current = ''; renderList(); show(''); }
  });
  $('th-new').addEventListener('click', function () {
    $('th-name').value = ''; saveDraft(); current = ''; renderList(); mode(); show(''); msg(''); $('th-name').focus();
  });
  load(true);
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !busy) load(false); });
}

function page({ shell }) {
  const body = `${style}<h1>${TITLE}</h1>`
    + `<div class="th-grid">`
    + `<aside class="th-side" aria-label="全部笔记"><div class="th-side-head"><span id="th-count" class="muted"></span>`
    + `<button id="th-new" class="th-btn" type="button" hidden>+ 新笔记</button></div>`
    + `<ul id="th-list"></ul><p id="th-empty" class="th-empty" hidden>还没有笔记。写下第一条随想，点 Update，就会出现在这里。</p></aside>`
    + `<div class="th-main">`
    + `<form id="th-form" class="th-form" hidden>`
    + `<label for="th-name">File name</label><input id="th-name" type="text" list="th-names" autocomplete="off" maxlength="60" placeholder="输入新名字，或选一篇已有的笔记"><datalist id="th-names"></datalist>`
    + `<label for="th-text">随想</label><textarea id="th-text" placeholder="想到什么写什么…"></textarea>`
    + `<div class="th-actions"><button id="th-save" class="th-btn th-primary" type="submit">Update</button><span id="th-mode" class="muted"></span></div>`
    + `</form>`
    + `<p id="th-msg" class="muted"></p>`
    + `<div id="th-view" class="th-view" hidden></div>`
    + `</div></div>`
    + `<script>(${client.toString()})();</script>`;
  fs.writeFileSync(FILE, shell(TITLE, body, true));
  return { file: FILE };
}

module.exports = { FILE, TITLE, DIR_REL, INDEX_REL, PATH, parse, list, writeIndex, handle, merge, page };
