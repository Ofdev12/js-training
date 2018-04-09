'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */

 const whisper = (str) => {
     return str.toLowerCase()
 }

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('Pon'), 'pon')
assert.deepStrictEqual(whisper('Patate'), 'patate')
assert.deepStrictEqual(whisper('NEIGE d\'ete'), 'neige d\'ete')
// End of tests */
