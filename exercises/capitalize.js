'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */

const capitalize = (str) => {
    let yolo = str.charAt(0).toUpperCase()
    yolo = `${yolo}${str.toLowerCase().slice(1)}`
    // .charAt(0)
    // .toUpperCase() 
    // yolo = yolo + str.slice(1)
    
    return yolo
    
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
