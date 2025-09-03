/**
 * ✅ Problem Name: [Contains Duplicate]
 * ✅ LeetCode Problem Number: [217]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-09-03]
 *
 * 🧠 Description:
 * [Given an integer array nums, return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.]
 *
 * 🧪 Example 1:
Input: nums = [1,2,3,1]
Output: true

 * 🧪Example 2:
Input: nums = [1,2,3,4]
Output: false

 * 🧪 Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 *
 * 💡 Approach:
[
 • First, sort the array.
 • Create two variables:
 • element → initialized with the first value of nums.
 • duplicate → a flag initialized with false.
	• Iterate through the array starting from index 1.
 • If element matches the current value, set duplicate = true and break.
 • Else update element with the current value.
	• Return the value of duplicate (true if duplicate found, false otherwise).
]
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();
  let element = nums[0];
  let duplicate = false;
  for (let i = 1; i < nums.length; i++) {
    if (element === nums[i]) {
      duplicate = true;
      break;
    } else element = nums[i];
  }
  return duplicate;
};
