function reverseString (string) {
    let reverse = '';
    let large = string.length;
    for (let i=1; i<=large; i++) {
        reverse += string[large-i]
    }
    return reverse
};
// let reverseString = 'hola';
console.log(reverseString('hola'))
// Do not edit below this line
module.exports = reverseString;
