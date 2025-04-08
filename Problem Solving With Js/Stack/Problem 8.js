function buildArray(target, n) {
    const operations = [];
    let current = 1;

    for (let num of target) {
        while (current < num) {
            operations.push("Push");
            operations.push("Pop");
            current++;
        }
        operations.push("Push");
        current++;
    }

    return operations;
}
