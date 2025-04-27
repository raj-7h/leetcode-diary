/**
 * ✅ Problem Name: [Allow One Function Call]
 * ✅ LeetCode Problem Number: [2666]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-26]
 *
 * 🧠 Description:
 * [Given a function fn, 
 * return a new function that is identical to the original function except that it ensures fn is called at most once.]
 
 * 🧪 Examples:
 * 
 Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called

Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
 *
 * 💡 Approach:
 * [•	Create a variable count, initialized to 0, outside the returned function.
	•	Return an inner function that:
	•	Increments count each time it is called.
	•	If count === 1 (means first time calling):
	•	Call and return fn(...args).
	•	If count > 1, do nothing and return undefined.
  ]
 *
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let count = 0;
  return function (...args) {
    count++;
    if (count === 1) {
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
