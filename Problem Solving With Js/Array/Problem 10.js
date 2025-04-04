function findMatrix(nums) {
    const count = new Array(nums.length + 1).fill(0);
    const result = [];

    for (const num of nums) {
        count[num]++;
    }

    let maxRows = Math.max(...count);
    
    for (let i = 0; i < maxRows; i++) {
        const row = [];
        for (let j = 1; j < count.length; j++) {
            if (count[j] > 0) {
                row.push(j);
                count[j]--;
            }
        }
        if (row.length > 0) {
            result.push(row);
        }
    }

    return result;
}


const param_1 = [1, 3, 4, 1, 2, 3, 1];
var ret = findMatrix(param_1);
console.log(ret);

const param_2 = [1, 2, 3, 4];
var ret2 = findMatrix(param_2);
console.log(ret2);