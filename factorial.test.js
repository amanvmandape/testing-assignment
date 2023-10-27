const factorial = require('./factorial')

test('Generates a factorial of argument', ()=>
{
    expect(factorial(10)).toBe(3628800)
})