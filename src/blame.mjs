import Module from "node:module";

const require = Module.createRequire(import.meta.url);

export const blame = require('git-blame');