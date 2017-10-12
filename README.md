# eslint-plugin-no-editor-code

Prevent checking in of code or comments specific to a particular editor.

[![Build Status](https://travis-ci.org/r24y/eslint-plugin-no-editor-code.svg?branch=develop)](https://travis-ci.org/r24y/eslint-plugin-no-editor-code)
[![GitHub last commit](https://img.shields.io/github/last-commit/r24y/eslint-plugin-no-editor-code.svg)](https://github.com/r24y/eslint-plugin-no-editor-code/graphs/commit-activity)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/r24y/eslint-plugin-no-editor-code.svg)](https://github.com/r24y/eslint-plugin-no-editor-code/blob/develop/LICENSE.md)

> Credit for this plugin goes to [Kent C. Dodds](https://twitter.com/kentcdodds), who extended [an open invitation](https://twitter.com/kentcdodds/status/918580049078603782) to publish the code he'd written.

## Usage

```js
npm install --save-dev eslint-plugin-no-editor-code
```

## Rules

### no-editor-code/region

Disable use of [Visual Studio Code](https://code.visualstudio.com/)'s [folding regions](https://code.visualstudio.com/updates/v1_17#_folding-regions) feature.

```js
// Valid code:
// Basically, any comment text is permitted.

// Invalid code:
//#region
//#endregion
//#region Foo region
//#endregion
```

## Contributing

This project uses [ESLint-style commit messages](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-eslint/convention.md).