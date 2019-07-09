const Color = require('color')
const postcss = require('postcss')

const hexRegex = require('hex-color-regex')()
const hslRegex = require('hsl-regex')()
const hslaRegex = require('hsla-regex')()
const rgbRegex = require('rgb-regex')()
const rgbaRegex = require('rgba-regex')()

const postcssColorInvert = postcss.plugin('postcss-color-invert', function () {
  return function (root) {
    root.walkDecls(function (decl) {
      let value = decl.value
      value = invertColor(value, hexRegex, hex)
      value = invertColor(value, rgbRegex, rgb)
      value = invertColor(value, rgbaRegex, rgb)
      value = invertColor(value, hslRegex, hsl)
      value = invertColor(value, hslaRegex, hsl)
      decl.value = value
    })
  }
})

function invertColor (value, regexp, transform) {
  return value.replace(regexp, function (match) {
    return transform(new Color(match).negate()).toLowerCase()
  })
}

function hex (value) {
  return value.hex()
}
function hsl (value) {
  return value.hsl().string()
}
function rgb (value) {
  return value.rgb().string()
}

module.exports = postcssColorInvert
