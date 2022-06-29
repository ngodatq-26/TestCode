const MathEx2 = require('./exercise1');

test('find the strings’ length that appear most in this array ', () => { 
    expect(MathEx2.All(['a','c','bb'])).toEqual(['a','c'])
})
test('find the strings’ length that appear most in this array ', () => { 
    expect(MathEx2.All(['a','ab','abc','cd','def','gh'])).toEqual(['ab','cd','gh'])
})