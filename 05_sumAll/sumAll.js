const sumAll = function(num1, num2) {
    if ((num1>=0 & num2>=0) & (typeof num1 =='number' & typeof num2 =='number')) {
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
console.log(sumAll(45559,3))
// Do not edit below this line
module.exports = sumAll
