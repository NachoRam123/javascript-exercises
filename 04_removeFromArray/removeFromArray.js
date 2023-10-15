const removeFromArray = function(array, elements) {
    const args = Array.prototype.slice.call(arguments,1)
    for (const ar of args) {
        console.log(ar)
        const _index = array.indexOf(ar);
        if (_index != -1) { 
            array.splice(_index,1)    
        }
    }    
    return array
};
console.log(removeFromArray([1,2,3,4],'3',4));
// const arr_2 = ['3',3];
// console.log(arr_2.indexOf(3))
// Do not edit below this line
module.exports = removeFromArray;
