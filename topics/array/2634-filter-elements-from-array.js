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
 * [To solve this problem I use array Built-in function `.filter`. with the help
 * of this built-in function we can filter elements from the array based on conditions,
 * Here, I use the function `fn` to filter the elements]
 *
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArray = arr.filter(fn);
  return newArray;
};
