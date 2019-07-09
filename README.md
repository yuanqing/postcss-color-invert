# postcss-color-invert [![npm Version](https://badgen.net/npm/v/postcss-color-invert)](https://www.npmjs.org/package/postcss-color-invert) [![Build Status](https://badgen.net/travis/yuanqing/postcss-color-invert?label=build)](https://travis-ci.org/yuanqing/postcss-color-invert) [![Coverage Status](https://badgen.net/coveralls/c/github/yuanqing/postcss-color-invert)](https://coveralls.io/r/yuanqing/postcss-color-invert)

> A PostCSS plugin to invert colors

- Supports inverting colors specified in hex, RGB, RGBA, HSL, and HSLA formats

## Usage

```js
const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const postcssColorInvert = require('postcss-color-invert')

const inputFile = path.join(__dirname, 'input.css')
const input = fs.readFileSync(inputFile, 'utf8')
console.log(input) // => 'a { color: #ff0000; }'

postcss([postcssColorInvert()])
  .process(input, { from: inputFile })
  .then(function (result) {
    console.log(result.css) // => 'a { color: #00ffff; }'
  })
```

## Installation

```sh
$ yarn add --dev postcss-color-invert
```

## License

[MIT](LICENSE.md)
