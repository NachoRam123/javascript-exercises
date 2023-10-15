const sumAll = function(num1, num2) {
    let suma = 0;
    var low = num1 < num2 ? num1 : num2;
    var high = low + Math.abs(num1-num2)
    for (i = low; i <=high; i++) {
        suma += i
    }
    return suma
};
console.log(sumAll(1,3))
// Do not edit below this line
module.exports = sumAll;
