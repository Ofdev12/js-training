'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */



const jadenCase = (str) => {
    let arr = str.toLowerCase().split(' ')
    let newarray1 = []

    for (let i = 0 ; i < arr.length ; i++) {
        newarray1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
    return newarray1.join(' ')

}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('str is a String'), 'Str Is A String')
assert.strictEqual(jadenCase('qsdqsdqsd IS NOT A nuMbers'), 'Qsdqsdqsd Is Not A Numbers')


// assert.fail('You must write your own tests')
// End of tests */
