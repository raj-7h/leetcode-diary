/**
 * ✅ Problem Name: [Filter Element from Array]
 * ✅ LeetCode Problem Number: [2634]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-24]
 *
 * 🧠 Description:
 * [Given an integer array arr and a filtering function fn,
 *  return a filtered array filteredArr.]
 *
 * 🧪 Examples:
 * Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10

Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
 *
 * 💡 Approach:
 * [	•	Create one variable and one empty array:
	      •	newArray – to store the final result
	      •	index – to iterate through the array using a while loop
	•	Enter the while loop:
	  •	In each iteration:
	    •	Call the function fn with parameters arr[index] and index, and wrap it inside Boolean() to ensure a truthy/falsy output
	    •	Use the ternary operator:
	      •	If the result is true, push arr[index] into newArray
	      •	Otherwise, do nothing
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
var filter = function (arr, fn) {
  var index = 0;
  let newArray = [];
  while (index < arr.length) {
    Boolean(fn(arr[index], index)) ? newArray.push(arr[index]) : null;
    index++;
  }
  return newArray;
};
