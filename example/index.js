const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const postcssColorInvert = require('..')

const inputFile = path.join(__dirname, 'input.css')
const input = fs.readFileSync(inputFile, 'utf8')
console.log(input) // => 'a { color: #ff0000; }'

postcss([postcssColorInvert()])
  .process(input, { from: inputFile })
  .then(function (result) {
    console.log(result.css) // => 'a { color: #00ffff; }'
  })
