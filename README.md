# eslint-plugin-no-editor-code

Prevent checking in of code or comments specific to a particular editor.

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