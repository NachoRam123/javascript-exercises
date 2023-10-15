const sumAll = function(num1, num2) {
    if (num1>=0 & num2>=0) {
        let suma = 0;
        var low = num1 < num2 ? num1 : num2;
        var high = low + Math.abs(num1-num2)
        for (i = low; i <=high; i++) {
            suma += i
        }
        return suma
    }    
    else {
        return 'ERROR'
    }
}
console.log(sumAll(-1,3))
// Do not edit below this line
module.exports = sumAll
