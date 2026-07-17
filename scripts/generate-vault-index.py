#!/usr/bin/env python3

import json
import sys
import hashlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RULES_FILE = ROOT / "vault-rules.json"
MANIFEST_FILE = ROOT / "vault-manifest.json"
INDEX_FILE = ROOT / "vault-index.json"

def fatal(msg):
    print(f"[ERROR] {msg}")
    sys.exit(1)

def load_json(path: Path):
    if not path.exists():
        fatal(f"{path.name} not found")
    try:
        with path.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        fatal(f"Failed to read {path.name}: {e}")

def normalize(path: str):
    return path.replace("\\", "/").strip("/")

def is_excluded(relative_path, excludes):
    rp = normalize(relative_path)
    for ex in excludes:
        ex = normalize(ex)
        if rp == ex or rp.startswith(ex + "/"):
            return True
    return False

def compute_file_data(path: Path):
    """
    Computes size and SHA256 hash of the raw binary file.
    This guarantees the hash perfectly matches the ZIP extraction stream.
    """
    size = path.stat().st_size
    hasher = hashlib.sha256()
    
    with path.open('rb') as f:
        while chunk := f.read(8192):
            hasher.update(chunk)
            
    return hasher.hexdigest(), size

def scan_repository(includes, excludes):
    files_data = []
    directories = set()
    total_bytes = 0

    for item in includes:
        target = ROOT / item

        if not target.exists():
            print(f"[WARNING] Missing include: {item}")
            continue

        if target.is_file():
            rel = normalize(target.relative_to(ROOT).as_posix())
            if not is_excluded(rel, excludes):
                f_hash, f_size = compute_file_data(target)
                files_data.append({"path": rel, "hash": f_hash, "size": f_size})
                total_bytes += f_size
            continue

        for file in target.rglob("*"):
            if not file.is_file():
                continue

            rel = normalize(file.relative_to(ROOT).as_posix())
            if is_excluded(rel, excludes):
                continue

            f_hash, f_size = compute_file_data(file)
            files_data.append({"path": rel, "hash": f_hash, "size": f_size})
            total_bytes += f_size
            directories.add(str(Path(rel).parent))

    # Sort files alphabetically for deterministic JSON output
    files_data.sort(key=lambda x: x["path"])
    return files_data, directories, total_bytes

def main():
    print("Loading configuration...")
    rules = load_json(RULES_FILE)
    manifest = load_json(MANIFEST_FILE)

    includes = rules.get("index", {}).get("include", [])
    excludes = rules.get("index", {}).get("exclude", [])
    version = manifest.get("version", "0.0.0")

    print(f"Vault Version : {version}")
    
    files_data, directories, total_bytes = scan_repository(includes, excludes)

    print("Repository Scan Completed")
    print("--------------------------")
    print(f"Indexed Files      : {len(files_data)}")
    print(f"Directories        : {len(directories)}")
    print(f"Total Bytes        : {total_bytes}")

    # Build structure exactly as expected by main.js
    index_json = {
        "formatVersion": 1,
        "version": version,
        "generated": True,
        "files": files_data,
        "statistics": {
            "files": len(files_data),
            "directories": len(directories),
            "bytes": total_bytes
        }
    }

    # Write output to vault-index.json
    with INDEX_FILE.open("w", encoding="utf-8") as f:
        json.dump(index_json, f, indent=4, ensure_ascii=False)
        
    print(f"\nSuccessfully wrote updated data to {INDEX_FILE.name}")

if __name__ == "__main__":
    main()
