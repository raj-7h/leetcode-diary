/**
 * ✅ Problem Name: [Apply Transform Over Each Element in Array]
 * ✅ LeetCode Problem Number: [2635]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-24]
 *
 * 🧠 Description:
 * [Given an integer array arr and a mapping function fn, 
 * return a new array with a transformation applied to each element.]
 
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
 * [	•	Create one variable and one empty array:
	      •	newArray – to store the final result
	      •	index – to iterate through the array using a while loop
	•	Enter the while loop:
	  •	In each iteration:
	    •	push the value returned by the fn function
      • As parameter to fn, pass array [index] and index
	  •	Increment index to move to the next element
	•	After the loop ends, return newArray]
 *
 */
/**
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  var newArray = [];
  let index = 0;
  while (index < arr.length) {
    newArray.push(fn(arr[index], index));
    index++;
  }
  return newArray;
};
