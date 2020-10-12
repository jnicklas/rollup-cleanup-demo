let watch = require('rollup').watch;
let typescript = require('@rollup/plugin-typescript')

let watcher = watch({
  input: "./test.ts",
  plugins: [
    typescript()
  ]
});

console.log("running");
setTimeout(() => {
  console.log("closing");
  watcher.close()
}, 2000);
