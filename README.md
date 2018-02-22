# bench

> A quick and simple wrapper around [Benchmark.js Suite](https://benchmarkjs.com/docs#Suite)

## Install

```
npm i @lokua/bench
```

## Usage

Create your test file:

```js
// test.js
const bench = require('@lokua/bench)

bench({
  'Test 1': () => {
    // whatever
  },

  'Test 2': () => {
    // whatever
  }
})
```

Then run your file with node from the command line:

```sh
node ./test.js

# ... benchmark logs, something like:

#   Test 1 x 20,762,510 ops/sec ±1.05% (91 runs sampled)
#   Test 2 x 23,006,483 ops/sec ±0.94% (91 runs sampled)
#   Fastest is Test 2
```
