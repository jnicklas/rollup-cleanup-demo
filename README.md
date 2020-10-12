# Rollup Cleanup Demo

Rollup does not clean up properly after plugins when shutting down. Calling
`close()` on watcher should also clean up resources created by plugins. For
example the TypeScript plugin has [an internal watcher](https://github.com/rollup/plugins/blob/366380eb33c31957fa80dd1df9d4cec8477294c2/packages/typescript/src/index.ts#L33) which is not cleaned up.
This repo has a minimal reproduction using the Rollup API with the TypeScript
watcher. Running `node index.js` creates a watcher which is closed after two
seconds. At this point, all resources should be closed and node should exit.
However, the typescript plugin is not informed of the closing of rollup and
does not clean up after itself. As a result, `node` hangs forever.

## Running the reproduction

```
npm install
node index.js
```
