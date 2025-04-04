function containsDuplicate(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return true; 
        }
        seen.add(num); 
    }
    
    return false; 
}


console.log(containsDuplicate([1, 2, 3, 1])); 
console.log(containsDuplicate([1, 2, 3, 4])); 
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));