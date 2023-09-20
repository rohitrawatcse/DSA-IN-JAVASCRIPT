function shuffleArray(nums, n) {
    const result = [];
    
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    
    return result;
}

// Example usage:
const nums1 = [2, 5, 1, 3, 4, 7];
const n1 = 3;
const result1 = shuffleArray(nums1, n1);
console.log(result1); // Output: [2, 3, 5, 4, 1, 7]

const nums2 = [1, 2, 3, 4, 4, 3, 2, 1];
const n2 = 4;
const result2 = shuffleArray(nums2, n2);
console.log(result2); // Output: [1, 4, 2, 3, 3, 2, 4, 1]

const nums3 = [1, 1, 2, 2];
const n3 = 2;
const result3 = shuffleArray(nums3, n3);
console.log(result3); // Output: [1, 2, 1, 2]
