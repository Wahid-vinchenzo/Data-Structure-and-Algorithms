function findNumbers(nums) {
    let count = 0;

    for (let num of nums) {
        
        if (String(num).length % 2 === 0) {
            count++; 
        }
    }

    return count; 
}


const param_1 = [12, 345, 2, 6, 7896];
var ret = findNumbers(param_1);
console.log(ret); 

const param_2 = [555, 901, 482, 1771];
ret = findNumbers(param_2);
console.log(ret); 