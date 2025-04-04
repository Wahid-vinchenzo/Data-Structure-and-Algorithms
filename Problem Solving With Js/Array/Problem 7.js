function minOperations(boxes) {
    const n = boxes.length;
    const answer = new Array(n).fill(0);
    let balls = 0;
    let operations = 0;

    for (let i = 0; i < n; i++) {
        answer[i] += operations;
        balls += boxes[i] === '1' ? 1 : 0;
        operations += balls;
    }

    balls = 0;
    operations = 0;

    for (let i = n - 1; i >= 0; i--) {
        answer[i] += operations;
        balls += boxes[i] === '1' ? 1 : 0;
        operations += balls;
    }

    return answer;
}

const boxes1 = "110";
console.log(minOperations(boxes1));

const boxes2 = "001011";
console.log(minOperations(boxes2));