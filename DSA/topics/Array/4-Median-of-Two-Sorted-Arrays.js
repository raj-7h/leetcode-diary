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
 * 	•	Always binary search on the smaller array.
	•	Partition both arrays so left half = (m+n+1)//2 elements.
	•	Use i for nums1 partition, j = leftTotal - i for nums2.
	•	Track boundary values:
	•	maxLeft1, minRight1 from nums1
	•	maxLeft2, minRight2 from nums2
	•	Valid partition if:
	•	maxLeft1 <= minRight2 and maxLeft2 <= minRight1.
	•	If valid:
	•	Odd length → median = max(maxLeft1, maxLeft2)
	•	Even length → median = (max(maxLeft1,maxLeft2) + min(minRight1,minRight2)) / 2
	•	Else adjust binary search:
	•	If maxLeft1 > minRight2 → move left
	•	Else → move right
  ]
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let m = nums1.length;
  let n = nums2.length;
  let leftTotal = Math.floor((m + n + 1) / 2);

  let low = 0,
    high = m;

  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    let j = leftTotal - i;

    let maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    let minRight1 = i === m ? Infinity : nums1[i];

    let maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    let minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeft1, maxLeft2);
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
    } else if (maxLeft1 > minRight2) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }
};
