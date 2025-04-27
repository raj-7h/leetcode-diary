/**
 * ✅ Problem Name: [Function Composition]
 * ✅ LeetCode Problem Number: [2629]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-26]
 *
 * 🧠 Description:
 * [Given an array of functions [f1, f2, f3, ..., fn],
 *  return a new function fn that is the function composition of the array of functions.]
 
 * 🧪 Examples:
 Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
 *
 * 💡 Approach:
 * [	•	Create two variables:
			•	val — to store and update the value of x (for cleaner code and avoiding overwriting input).
			•	index — to iterate backward through the functions array.
	•	Enter a while loop:
			•	In each iteration:
			•	Extract the current function from functions[index].
			•	Pass the current val into that function and update val with the result.
	•	Decrement index to move to the previous function.
	•	After the loop ends, return the final val.
  ]
 *
 */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    var val = x;
    var index = functions.length - 1;
    while (index >= 0) {
      val = functions[index](val);
      index--;
    }
    return val;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
