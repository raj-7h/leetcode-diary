/**
 * ✅ Problem Name: [Merge Sorted Array]
 * ✅ LeetCode Problem Number: [88]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-20]
 *
 * 🧠 Description:
 * [
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n, representing the number of elements in nums1 and nums2 
 * respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored 
inside the array nums1. To accommodate this, nums1 has a length of m + n, where the 
first m elements denote the elements that should be merged, and the last n elements 
are set to 0 and should be ignored. nums2 has a length of n.

]
 *
 * 🧪 Examples:
 * Input: 
 nums1 = [1,2,3,0,0,0], m=3, nums2= [2,5,6], n=3
 * Output: [1,2,2,3,5,6]
 
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

nums1 = [1], m=1, nums2= [], n=0
 * Output: [1]

Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

 nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]

Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
💡 **Approach**  
	•	Initialize a pointer i = m to start inserting elements of nums2 into nums1 from the correct position.
	•	Iterate over nums2 using a loop, and for each element insert it into nums1 at position i, then increment i.
	•	Once all elements of nums2 are copied, sort the nums1 array using a compare function (a, b) => a - b to ensure numerical ordering.
	•	Finally, return the updated nums1 array.
    
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m;
  for (let j = 0; j < n; j++) {
    nums1[i] = nums2[j];
    i++;
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};
