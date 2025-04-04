function pivotArray(nums, pivot) {
    const less = [];
    const equal = [];
    const greater = [];

    for (const num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return [...less, ...equal, ...greater];
}

const param_1 = [9, 12, 5, 10, 14, 3, 10];
const param_2 = 10;
var ret = pivotArray(param_1, param_2);
console.log(ret);

const param_3 = [-3, 4, 3, 2];
const param_4 = 2;
var ret2 = pivotArray(param_3, param_4);
console.log(ret2);