/**
 * ✅ Problem Name: [Majority Element]
 * ✅ LeetCode Problem Number: [169]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-09-03]
 *
 * 🧠 Description:
 * [Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.]
 *
 * 🧪 Example 1:
Input: nums = [3,2,3]
Output: 3

* 🧪Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 *
 * 	•	💡 Approach:
	•	[ solved this approach by Moore’s Voting Algorithm.
	•	  Created two variables majority and vote. majority initialized with the 0th element of nums and vote initialized with 1.
	•	  Iterate through the array from index 1.
	•	  If the current element is same as majority, increase vote.
	•	  Else if vote is 0, change majority to the current element and reset vote = 1.
	•	  Otherwise (when vote is not 0 and element is different), decrease vote.
	•	  At the end, return majority as the majority element.
]
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = nums[0];
  let vote = 1;
  for (let i = 1; i < nums.length; i++) {
    if (majority === nums[i]) vote++;
    else if (vote === 0) majority = nums[i];
    else vote--;
  }
  return majority;
};
