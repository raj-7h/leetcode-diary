/**
 * ✅ Problem Name: [Contains-Duplicate-II]
 * ✅ LeetCode Problem Number: [219]
 * ✅ Difficulty: [Easy ]
 * ✅ Date Solved: [2025-09-04]
 *
 * 🧠 Description:
 * [
 * Given an integer array nums and an integer k, return true if there are two distinct 
 * indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.]
 *
 🧪 Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

🧪 Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

🧪 Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 *
* 💡 Approach:
 * [•	Create a Map to store elements with their last seen index.
	•	Iterate through the nums array using a for loop:
	    •	If the current element already exists in the Map:
	        •	Retrieve its previous index.
	        •	Check the difference between current index and previous index.
	        •	If the difference is ≤ k, return true (duplicate found within range).
	    •	Update the Map with the current element and its index.
	•	If the loop finishes without finding any valid pair, return false.
  ]
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let prevIndex = map.get(nums[i]);
      if (i - prevIndex <= k) return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
