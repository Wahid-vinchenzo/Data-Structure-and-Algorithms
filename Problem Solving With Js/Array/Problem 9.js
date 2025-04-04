function findThePrefixCommonArray(A, B) {
    const n = A.length;
    const C = new Array(n).fill(0);
    const seenA = new Set();
    const seenB = new Set();

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        C[i] = Array.from(seenA).filter(x => seenB.has(x)).length;
    }

    return C;
}

const A1 = [1, 3, 2, 4];
const B1 = [3, 1, 2, 4];
console.log(findThePrefixCommonArray(A1, B1));

const A2 = [2, 3, 1];
const B2 = [3, 1, 2];
console.log(findThePrefixCommonArray(A2, B2));