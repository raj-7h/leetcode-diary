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
 
💡 Approach
	•	The missing positive number must lie in the range 1 to n+1 (where n = nums.length).
	•	We can rearrange the numbers so that if a number k exists in the array, it is placed at index k-1.

	1.	Rearrange elements into correct positions
	•	Traverse the array.
	•	For each element nums[i]:
	•	If 1 <= nums[i] <= n and it is not already in the correct spot (nums[nums[i] - 1] !== nums[i]), swap it with the element at its correct index.
	•	Repeat until the current index has a valid element in place.
	2.	Find the first missing number
	•	After rearrangement, iterate over the array.
	•	If nums[i] !== i + 1, then the missing positive integer is i + 1.
	3.	Handle case when all are in place
	•	If every index has the correct number, then the missing integer is n + 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;

  // Place each number in its correct position if possible
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  // Find the first index where nums[i] != i+1
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  // If all positions filled correctly, answer is n+1
  return n + 1;
};
