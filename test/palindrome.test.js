const {palindrome} = require('../utils/for_testing')

//testing se basa en el requerimiento

test('palindrome de avion', () => {
    const result = palindrome('noiva')

    expect(result).toBe('avion')
});

test('palindrome de cadena vacia', () => {
    //const result = palindrome()
    const result = palindrome('')
    expect(result).toBe('')
})

//
test('palindrome of undefined', () => {
    const result = palindrome()
    expect(result).toBeUndefined()
})

test('palindrome of undefined', () => {
    const result = palindrome(1)
    expect(result).toBeUndefined()
})