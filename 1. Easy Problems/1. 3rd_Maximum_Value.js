// Approach
// I firstly sorted the array and then created an arraylist, so that I can eliminate the duplicates and form an array without any duplicates. After that just coding the conditions to get the desired results.

// Complexity
// Time complexity:
// O(nlogn)

// Space complexity:
// O(n)

// Code

function thirdMax(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const distinctNumbers = [];

    for (let i = 0; i < nums.length; i++) {
        // Check if the current number is not a duplicate
        if (i === 0 || nums[i] !== nums[i - 1]) {
            distinctNumbers.push(nums[i]);
        }
    }

    if (distinctNumbers.length >= 3) {
        return distinctNumbers[distinctNumbers.length - 3];
    }

    return distinctNumbers[distinctNumbers.length - 1];
}

// Example usage:
const nums = [3, 2, 1];
const result = thirdMax(nums);
console.log("Third distinct maximum:", result);



// 2nd way approach

function thirdMax(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let distinctCount = 1;
    
    // Start from the end of the sorted array and iterate backward
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] !== nums[i + 1]) {
            distinctCount++;
        }
        
        if (distinctCount === 3) {
            return nums[i];
        }
    }
    
    // If there are fewer than 3 distinct elements, return the maximum
    return nums[nums.length - 1];
}

// Example usage:
const nums = [3, 2, 1];
const result = thirdMax(nums);
console.log("Third distinct maximum:", result);



/**** The time complexity of the given Java code for finding the third distinct maximum number in an array is O(n log n), 
 * where "n" is the number of elements in the input array. This is because of the sorting step, which dominates the time 
 * complexity.

Here's why:

Sorting the array using Arrays.sort(nums) takes O(n log n) time in the worst case for an array of length "n" because 
it uses a comparison-based sorting algorithm (e.g., TimSort).

The subsequent iteration through the sorted array takes O(n) time because we loop through all the elements once.

Therefore, the overall time complexity of the algorithm is O(n log n), where "n" is the length of the input array. *****/