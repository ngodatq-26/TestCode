const MathEx1 = require('./exercise2');

test('calculator sum max 2 number', () => { 
    expect(MathEx1.sumCalculator([1,2,3,4,5])).toBe(9)
})

test('calculator sum max 2 number', () => { 
    expect(MathEx1.sumCalculator([-10,2,3,40,5])).toBe(45)
})

test('calculator sum max 2 number', () => { 
    expect(MathEx1.sumCalculator([-1,2,-3,4,105])).toBe(109)
})