const bench = require('./index')

bench({
  for() {
    const arr = []

    for (let i = 0; i < 5; i++) {
      arr.push(i)
    }
  },

  doWhile() {
    let i = 0
    const arr = []

    do {
      arr.push(i)
    } while (i++ < 5)
  }
})
