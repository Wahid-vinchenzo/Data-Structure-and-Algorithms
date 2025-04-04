function runningSum(nums) {
    const result = [];
    let cumulativeSum = 0;

    for (let i = 0; i < nums.length; i++) {
        cumulativeSum += nums[i];
        result.push(cumulativeSum);
    }

    return result;
}


console.log(runningSum([1, 2, 3, 4])); 
console.log(runningSum([1, 1, 1, 1, 1])); 
console.log(runningSum([3, 1, 2, 10, 1])); 