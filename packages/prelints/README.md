# `@yirga/prelints`

Simply get eslint, stylelint, prettier configs and tsconfig.json for dev and debug;

## prettier & eslint & stylelint 

### Usage
require or extends in your js conf files (eg. eslintrc.js)
```
/* default usage */
const prettierConfig = require("@yirga/prelints").prettier;
module.exports = {
  ...prettierConfig,
};

/* similar import */
const eslintConfig = require("@yirga/prelints").eslint; // need tsconfig
const stylelintConfig = require("@yirga/prelints").stylelint;

/* eslint extend usage */
// must or install all needed eslint-plugins to your devDependencies
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [require.resolve(@yirga/prelints/lib/eslint.js)],
  parserOptions: {
    tsconfigRootDir: __dirname, // need your tsconfig.
  },
}
```

## lib/tsconfig.default.json

great useful tsconfig.base.json for editor interaction times.

### Usage
tsconfig.eslint.json in your root dir
```
{
  "extends": "@yirga/prelints/lib/tsconfig.default.json",
  "include": [".eslintrc.js"]
}

```

## lib/tsconfig.dev.json

great useful tsconfig.dev.json for vscode debug.
before that, you should global add [ts-node](https://www.npmjs.com/package/ts-node)

node version >= 12
### Usage
.vscode/launch.json

```
{
  {
    "type": "node",
    "name": "ts-node",
    "request": "launch",
    "protocol": "inspector",
    "env": { "TS_NODE_PROJECT": "${workspaceFolder}/tsconfig.dev.json" },
    "args": ["-r", "ts-node/register", "./${relativeFile}"],
    "cwd": "${workspaceFolder}",
    "console": "integratedTerminal",
    "sourceMaps": true,
  }
}
```
then your tsconfig.dev.json

```
{
  "extends": "@yirga/prelints/lib/tsconfig.dev.json"
}

```
you can debug the focusing .ts/.tsx file with vscode debug now!

## lib/tsconfig.build.json

great useful tsconfig.build.json for tsc build.
