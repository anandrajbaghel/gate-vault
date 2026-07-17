#!/usr/bin/env python3

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

RULES_FILE = ROOT / "vault-rules.json"
MANIFEST_FILE = ROOT / "vault-manifest.json"


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

        if rp == ex:
            return True

        if rp.startswith(ex + "/"):
            return True

    return False


def scan_repository(includes, excludes):
    indexed = []
    directories = set()

    for item in includes:

        target = ROOT / item

        if not target.exists():
            print(f"[WARNING] Missing include: {item}")
            continue

        if target.is_file():

            rel = normalize(target.relative_to(ROOT).as_posix())

            if not is_excluded(rel, excludes):
                indexed.append(rel)

            continue

        for file in target.rglob("*"):

            if not file.is_file():
                continue

            rel = normalize(file.relative_to(ROOT).as_posix())

            if is_excluded(rel, excludes):
                continue

            indexed.append(rel)

            directories.add(str(Path(rel).parent))

    indexed.sort()

    return indexed, directories


def main():

    print("Loading configuration...")

    rules = load_json(RULES_FILE)
    manifest = load_json(MANIFEST_FILE)

    includes = rules["index"]["include"]
    excludes = rules["index"]["exclude"]

    version = manifest["version"]

    print(f"Vault Version : {version}")
    print()

    files, directories = scan_repository(includes, excludes)

    print("Repository Scan Completed")
    print("--------------------------")
    print(f"Indexed Files      : {len(files)}")
    print(f"Directories        : {len(directories)}")

    print()

    print("First 20 indexed files:")

    for f in files[:20]:
        print("  ", f)


if __name__ == "__main__":
    main()
