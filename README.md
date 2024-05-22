# Windmill Codebase Example

Docs: https://www.windmill.dev/docs/core_concepts/codebases_and_bundles

To reproduce:
- Create folder src with the whole codebase.
- Create a folder with your Windmill workspace (can be done with Windmill CLI `wmill sync pull`).
- In Windmill folder, set codebase config and relative path in `wmill.yaml`.
- In Windmill folder, create a new script and its .yaml and .lock (manually or with `wmill script bootstrap`) and use imports to the codebase (`import { test } from "../../../src/index.ts";`).
- In repo, install dependencies, node_modules and package.json with:

```bash
bun init
bun install
# all needed installs and dependencies
```