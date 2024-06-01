const Subtract = require('./Subtract')
test('Two numbers should be properly subtracted',()=>{
    expect(Subtract(6,5)).toBe(1)
})