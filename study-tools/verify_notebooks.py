"""Execute each study notebook in an independent kernel and retain evidence."""
import json
import os
import sys
from pathlib import Path
import nbformat
from nbclient import NotebookClient
from jupyter_client.kernelspec import KernelSpecManager
from tempfile import TemporaryDirectory

root = Path(__file__).resolve().parents[1]
for variable, folder in [("MPLCONFIGDIR", "matplotlib"), ("IPYTHONDIR", "ipython"),
                         ("JUPYTER_RUNTIME_DIR", "jupyter-runtime")]:
    cache = root / ".study-venv" / ".cache" / folder
    cache.mkdir(parents=True, exist_ok=True)
    os.environ[variable] = str(cache)
results = []
with TemporaryDirectory() as directory:
    spec = Path(directory) / "study-python"
    spec.mkdir()
    (spec / "kernel.json").write_text(json.dumps({
        "argv": [sys.executable, "-m", "ipykernel_launcher", "-f", "{connection_file}"],
        "display_name": "Study validation", "language": "python"
    }), encoding="utf-8")
    manager = KernelSpecManager(kernel_dirs=[directory])
    for path in sorted((root / "notebook").glob("*.ipynb")):
        notebook = nbformat.read(path, as_version=4)
        client = NotebookClient(notebook, timeout=120, kernel_name="study-python",
                                resources={"metadata": {"path": str(path.parent)}})
        client.create_kernel_manager()
        client.km.kernel_spec_manager = manager
        try:
            client.execute()
            nbformat.write(notebook, path)
            charts = sum("image/png" in out.get("data", {})
                         for cell in notebook.cells for out in cell.get("outputs", []))
            if charts == 0:
                raise AssertionError("No rendered chart")
            results.append({"file": path.name, "status": "passed", "charts": charts})
            print("PASS", path.name, flush=True)
        except Exception as error:
            results.append({"file": path.name, "status": "failed", "error": str(error)})
            print("FAIL", path.name, str(error), flush=True)
(root / "study-tools" / "notebook-validation.json").write_text(
    json.dumps({"python": sys.version, "results": results}, indent=2), encoding="utf-8")
if any(result["status"] != "passed" for result in results):
    raise SystemExit(1)
