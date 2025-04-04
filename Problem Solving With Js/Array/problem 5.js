function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);
console.log(nums1);

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
console.log(nums2);