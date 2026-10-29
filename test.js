const assert = require("assert")
const { greet, shout } = require("./src/greeting")

assert.strictEqual(greet("Ana"), "Hello, Ana!")
assert.strictEqual(shout("Ana"), "HELLO, ANA!!!")
console.log("2 passing")
