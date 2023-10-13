const palindrome =(string) => {
    if (typeof string == 'undefined' || typeof string =='number') 
    return

    return string
        .split('')
        .reverse()
        .join('')
}

//recorre el arreglo,hace una suma
//pone un promedio 
const average = array => {
    let sum = 0;
    //es un arrreglo?
    //devolver 0
    if (!Array.isArray(array)) return 0;
    //si es 'identicamente' igual a 0 // no 0.000001
    else
        if (array.length === 0)return 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

const validarUsername = (username) => {
    if (username.trim() === '') {
        return 'El campo de usuario no puede estar vacío.';
    }
    return null; 
    // Si la validación es exitosa, devuelve null
};

const validarEmail = (email) => {
    if (!isValidoEmail(email)) {
        return 'ingresar email válido';
    }
    return null; 
    //si es correcto devovel null
};

const validarPassword = (password) => {
    if (!isStrongPassword(password)) {
        return 'La contraseña debe ser lo suficientemente fuerte.';
    }
    return null; 
    // Si la validación es correcat devuelve null
};

const validarDate = (date) => {
    if (!isValidoDate(date)) {
        return 'ingresa una fecha válida';
    }
    return null; 
    // Si la validación es corrrecta devuelve null
};

const isValidoEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
};

const isStrongPassword = (password) => {
    // Verifica que la contraseña tenga al menos 8 caracteres
    // contenga al menos una letra mayúscula
    // una letra minúscula y un número
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber;
};

const isValidoDate = (date) => {
    // validar una fecha en formato dd/mm/yyyy
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!datePattern.test(date)) {
        return false;
    }
    // válida no permitir fechas futuras
    const [, day, month, year] = date.match(datePattern);
    const parsedDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    return !isNaN(parsedDate) && parsedDate <= currentDate;
};

module.exports = {
    validarUsername,
    validarEmail,
    validarPassword,
    validarDate,
    palindrome,
    average
};
