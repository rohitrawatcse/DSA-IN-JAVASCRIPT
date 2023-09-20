// In Javascript

function duplicateArrayElements(nums) {
    const n = nums.length;
    const ans = new Array(2 * n);
    
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    
    return ans;
}

// Example usage:
const nums = [1, 2, 3];
const duplicatedArray = duplicateArrayElements(nums);
console.log(duplicatedArray); // Output: [1, 2, 3, 1, 2, 3]


// In Java

// class Solution {
//     public int[] getConcatenation(int[] nums) {
//         int n = nums.length;
//         int[] ans = new int[2*n];
//         for(int i = 0; i < n; i++){
//             ans[i] = nums[i];
//             ans[i+n] = nums[i];
//         }
        
//         return ans;
//     }
// }



