/**
 * ✅ Problem Name: [Apply Transform Over Each Element in Array]
 * ✅ LeetCode Problem Number: [2635]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-24]
 *
 * 🧠 Description:
 * [Given an integer array arr and a mapping function fn, 
 * return a new array with a transformation applied to each element.]
 *
 * 🧪 Examples:
 * Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
 *
 * 💡 Approach:
 * [I just use array Built-in function `.map()`,
 *  with this fuction we can update every single element of the array,
 * Here, we are using the function fn to update the element of the array `arr`]
 *
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const arr1 = arr.map(fn);
  return arr1;
};
