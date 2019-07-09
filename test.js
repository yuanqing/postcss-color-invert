const postcss = require('postcss')
const test = require('tape')

const postcssColorInvert = require('./')

function run (input, output) {
  return async function (t) {
    t.plan(2)
    const result = await postcss([postcssColorInvert]).process(input, {
      from: null
    })
    t.equal(result.css, output)
    t.equal(result.warnings().length, 0)
  }
}

test(
  'hex',
  run(
    'a {border-bottom: 1px solid #ffffff; }',
    'a {border-bottom: 1px solid #000000; }'
  )
)

test(
  'rgb',
  run(
    'a {border-bottom: 1px solid rgb(255, 255, 255); }',
    'a {border-bottom: 1px solid rgb(0, 0, 0); }'
  )
)

test(
  'rgba',
  run(
    'a {border-bottom: 1px solid rgba(255, 255, 255, 0); }',
    'a {border-bottom: 1px solid rgba(0, 0, 0, 0); }'
  )
)

test(
  'hsl',
  run(
    'a {border-bottom: 1px solid hsl(0, 0%, 100%); }',
    'a {border-bottom: 1px solid hsl(0, 0%, 0%); }'
  )
)

test(
  'hsla',
  run(
    'a {border-bottom: 1px solid hsla(0, 0%, 100%, 0); }',
    'a {border-bottom: 1px solid hsla(0, 0%, 0%, 0); }'
  )
)
