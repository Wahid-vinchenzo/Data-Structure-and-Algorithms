function minSwaps(s) {
    let balance = 0;
    let maxImbalance = 0;

    for (let char of s) {
        if (char === '[') {
            balance++;
        } else {
            balance--;
        }

        if (balance < 0) {
            maxImbalance = Math.max(maxImbalance, -balance);
        }
    }

    return Math.ceil(maxImbalance / 2);
}
