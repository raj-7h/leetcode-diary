/**
 * ✅ Problem Name: [Return Length of Arguments Passed]
 * ✅ LeetCode Problem Number: [2703]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-26]
 *
 * 🧠 Description:
 * [Write a function argumentsLength that returns the count of arguments passed to it.]
 *
 * 🧪 Examples:
 Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.

Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.

 *
 * 💡 Approach:
 * [• In javaScript .length method return the length of any array, string, and
 * No. of parameters passed into function]
 *
 */
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
