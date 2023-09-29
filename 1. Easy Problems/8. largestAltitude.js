
// largestAltitude


// Intuition
// Approach
// Each index of prefixSum array contains the sum of elements of the subarray that starts at the 0th index and ends at ith index.
// Next is to asign the 1st index of prefix sum array in a variable,
// and finding the max value.
// This way we found the Highest Altitude.
// Complexity
// Time complexity:
// O(n)
// Space complexity:
// O(1)
// Code



function largestAltitude(gain) {
    let high = gain[0];

    for (let i = 1; i < gain.length; i++) {
        gain[i] += gain[i - 1];
        if (gain[i] > high) {
            high = gain[i];
        }
    }

    return high < 0 ? 0 : high;
}


// class Solution {
//     public int largestAltitude(int[] gain) {
//         int high=gain[0];
//         for(int i=1;i<gain.length;i++){
//             gain[i]+=gain[i-1];
//             if(gain[i]>high)
//                 high=gain[i];
//         }
//         return high<0 ? 0 : high;
//     }
// }

// Intuition
// For this problem we use Prefix Sum.

// Approach
// We create prefix sum array where we will store sum of all heights, max variable to store max height and iterate over gain array, calculating prefix sum on each iteration, and checking max height.

// Complexity
// Time complexity:
// O(n) - we iterate over gain array once.

// Space complexity:
// O(n) - we create array of n + 1 elements to store prefix sum.


// Intuition
// For this problem we use Prefix Sum.

// Approach
// We create prefix sum array where we will store sum of all heights, max variable to store max height and iterate over gain array, calculating prefix sum on each iteration, and checking max height.

// Complexity
// Time complexity:
// O(n) - we iterate over gain array once.

// Space complexity:
// O(n) - we create array of n + 1 elements to store prefix sum.

// Code
// class Solution {
//     public int largestAltitude(int[] gain) {
        // declare prefix array of gains.lenght + 1
//         int[] prefix = new int[gain.length + 1];
        // set first element as 0;
//         prefix[0] = 0;
        // declare max variable and set it to 0 as min height
//         int max = 0;
        // iterate over gain array
//         for(int i = 0; i < gain.length; i++) {
            // calculate prefix sum on each iteration
//             prefix[i + 1] = prefix[i] + gain[i];
            // check max on each iteration
//             max = Math.max(prefix[i + 1], max);
//         }
        // return max height
//         return max;
//     }
// }