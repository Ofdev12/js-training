'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

 const yell = (str) => {
    return str.toUpperCase()
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('Pon'), 'PON')
assert.deepStrictEqual(yell('Patate'), 'PATATE')
assert.deepStrictEqual(yell('NEIGE d\'ete'), 'NEIGE D\'ETE')
// assert.fail('You must write your own tests')
// End of tests */
