const { 
    validarUsername, 
    validarEmail, 
    validarPassword, 
    validarDate 
} = require('../utils/for_testing');

test('validar usuario', () => {
    const username = 'sharon';
    const usernameError = validarUsername(username);
    expect(usernameError).toBeNull();
});

test('validar email correcto', () => {
    const email = 'sharon@gmail.com';
    const emailError = validarEmail(email);
    expect(emailError).toBeNull();
});

test('validar comtraseña invalida', () => {
    const password = '123456789';
    const passwordError = validarPassword(password);
    expect(passwordError).toBeNull();
});

test('validar correcta', () => {
    const date = '01/11/2000';
    const dateError = validarDate(date);
    expect(dateError).toBeNull();
});
test('validar fecha invalida', () => {
    const date = '01/28/2000';
    const dateError = validarDate(date);
    expect(dateError).toBeNull();
});

