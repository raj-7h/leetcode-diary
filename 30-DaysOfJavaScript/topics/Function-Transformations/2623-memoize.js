/**
 * ✅ Problem Name: [Memoize]
 * ✅ LeetCode Problem Number: [2623]
 * ✅ Difficulty: [Medium]
 * ✅ Date Solved: [2025-04-27]
 *
 * 🧠 Description:
 * [Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

]
 *
 * 🧪 Examples:
 
Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2

Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
 *
 * 💡 Approach:
 *[	• Create a cache object to store function results.
	• Return an inner function that:
	• Stringifies the arguments to generate a unique key.
	• Checks if the key exists in the cache:
	- If the key is found, return the cached value.
-	 If not, call the original function, store the result in the cache, and return the result. ]
  
 *
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
