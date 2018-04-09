'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

const cutLast = (str) => {
     return str.slice(0, -2)
 }
const cutFirst = (str) => {
    return str.substr(2)
}
const cutFistLast = (str) => {
    return str.substr(2).slice(0 , -2)
}
//* Begin of tests
const assert = require('assert')


assert.deepStrictEqual(cutLast('Neige est une chatte'), 'Neige est une chat')
assert.deepStrictEqual(cutFirst('Neige est une chatte'), 'ige est une chatte')
assert.deepStrictEqual(cutFistLast('Neige est une chatte'), 'ige est une chat')

// assert.fail('You must write your own tests')
// End of tests */
