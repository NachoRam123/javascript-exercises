const repeatString = function(string, num) {
    let text = ''
    if (num>=0) {
        for (let i = 1; i<=num; i++) {
            text += string
        }
        return text
    } 
    else {
        return 'ERROR'
    }
};
// console.log('ajksnckc')      
// console.log(repeatString('akscns', 3))
// Do not edit below this line
module.exports = repeatString;
