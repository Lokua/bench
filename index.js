const { Suite } = require('benchmark')

module.exports = (specs = {}, runOptions = {}) => {
  const suite = new Suite()

  Object.keys(specs).forEach(name => {
    suite.add(name, specs[name])
  })

  suite.on('cycle', e => {
    console.info(String(e.target))
  })

  suite.on('complete', () => {
    const fastest = suite.filter('fastest').map('name')
    console.info(`Fastest is ${fastest}`)
  })

  suite.run(
    Object.assign(
      {
        async: false
      },
      runOptions
    )
  )
}
