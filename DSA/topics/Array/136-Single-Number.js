/**
 * ✅ Problem Name: [ Single Number]
 * ✅ LeetCode Problem Number: [ 136 ]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-30]
 *
 * 🧠 Description:
 * [Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.]
 *
 🧪 Example 1:

Input: nums = [2,2,1]

Output: 1

🧪 Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

🧪 Example 3:

Input: nums = [1]

Output: 1
 *
 * 💡 Approach:
	•	Create a variable x initialized to 0 to store the XOR result.
			•	Iterate through the array nums:
	•	For each element n, update x = x ^ n.
			•	Leverage the properties of XOR:
			•	a ^ a = 0 → duplicate numbers cancel each other.
			•	a ^ 0 = a → XOR with zero gives the number itself.
	•	XOR is commutative and associative → order of operations does not matter.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let x = 0;
  for (const n of nums) x ^= n;
  return x;
};
