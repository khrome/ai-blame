import Module from "node:module";

const require = Module.createRequire(import.meta.url);

export const blame = require('git-blame');

/*
gitBlame(repoPath, {
  file: file,
  rev: rev
}).on('data', function(type, data) {
  // type can be 'line' or 'commit'
  console.log(type, data);
}).on('error', function(err) {
  console.error(err.message);
  process.exit(1);
}).on('end', function() {
  console.log('±±±±±±±±±±±±±±±±±±');
  console.log("That's all, folks!");
});
//*/