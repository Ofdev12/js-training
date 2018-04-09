'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (str) => {
    return str.slice(0, 2)
}
const keepLast = (str) => {
    return str.slice(0 - 2)
}
const keepFirstLast = (str) => {
    
    return str.slice(3, 5)
}


//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(keepFirst('Neige est une chatte'), 'Ne')
assert.deepStrictEqual(keepLast('Neige est une chatte'), 'te')
assert.deepStrictEqual(keepFirstLast('Neige est une chatte'), 'ge')
// assert.fail('You must write your own tests')
// End of tests */
