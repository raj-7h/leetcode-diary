/**
 * ✅ Problem Name: [Remove Duplicates from Sorted Array]
 * ✅ LeetCode Problem Number: [26]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-05-02]
 *
 * 🧠 Description:
 * [Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. 
 * Then return the number of unique elements in nums.]
 *
 * 🧪 Examples:
 * Input:
 * nums =
[1,1,2]
 * Output: 
[1,2]
 
 * 💡 Approach:
 * [
 * 	•	Create a variable:
	•	index = 1 → This will track the number of unique elements (and also the position to place the next unique element).
	•	Use a for loop to traverse the array:
	•	Compare each element with the next (nums[i] !== nums[i + 1]).
	•	If they are different:
	•	Assign nums[index] = nums[i + 1]
	•	Increment index by 1.
	•	Return index:
	•	This represents the count of unique elements.
  ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};
