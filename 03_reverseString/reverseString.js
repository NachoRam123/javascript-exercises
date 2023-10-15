function reverseString (string) {
    let reverse = '';
    let large = string.length;
    for (let i=1; i<=large; i++) {
        reverse += string[large-i]
    }
    return reverse
};
let palabra = 'hola';
console.log(palabra.split("").reverse().join(""))
// Do not edit below this line
module.exports = reverseString;
