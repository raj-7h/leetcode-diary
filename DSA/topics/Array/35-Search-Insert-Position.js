/**
 * ✅ Problem Name: [Search Insert Position]
 * ✅ LeetCode Problem Number: [35]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-18]
 *
 * 🧠 Description:
 * [Given a sorted array of distinct integers and a target value, return the index if 
 * the target is found. If not, return the index where it would be if it were inserted 
 * in order.
You must write an algorithm with O(log n) runtime complexity.

]
 *
 * 🧪 Examples:
 * Input:
 * nums =
[1,3,5,6], target = 5
 * Output: 
2
 
 💡 **Approach**  
- Since the array is sorted, we can use its properties to simplify the problem.  

1. **Handle edge cases first**  
   - If the last element of the array is smaller than the target → return `array.length`.  
   - If the array has only one element and it equals the target → return `0`.  

2. **Iterate through the array**  
   - For each element:  
     - If it equals the target → return its index.  
     - If it is greater than the target → return its index (the correct insertion position).  

This ensures we always return either the target’s index or the correct position where it should be inserted.
 *

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums[nums.length - 1] === target) return nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (nums[i] > target) return i;
  }
};
