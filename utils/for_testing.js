// const palindrome =(string) => {
//     if (typeof string == 'undefined') return

//     return string
//         .split('')
//         .reverse()
//         .join('')
// }

const palindrome =(string) => {
    if (typeof string == 'undefined' || typeof string =='number') 
    return

    return string
        .split('')
        .reverse()
        .join('')
}

// const average = array => {
//     let sum = 0;
//     array.forEach(num => {sum += num});
//     return sum / array.length;
// }

//recorre el arreglo,hace una suma
//pone un promedio 
const average = array => {
    let sum = 0;
    // if (!Array.isArray(array)) return 0;
    // else
    //     if (array.length ===0)return 0;
    array.forEach(num => {sum += num});
    return sum / array.length;
}

module.exports = {
    palindrome,
    average
}