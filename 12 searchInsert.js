/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = nums.findIndex(n => n >= target);
    return i > -1 ? i : nums.length;
};