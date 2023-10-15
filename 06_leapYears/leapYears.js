const leapYears = function(year) {
    if ((year % 4 == 0) && (year % 100 != 0 || (year % 100 == 0 && year % 400 == 0))){
        return true
    }
    else {
        return false
    }

};
// ||year % 4 == 0 || year % 100 != 0))
console.log(leapYears(2000));
// const year = 2000;
// console.log((year % 4 == 0) && (year % 100 != 0 || (year % 100 == 0 && year % 400 == 0)));
// console.log(year % 100 != 0);
// console.log(year % 100 != 0 || (year % 100 == 0 && year % 400 == 0))


// Do not edit below this line
module.exports = leapYears;
