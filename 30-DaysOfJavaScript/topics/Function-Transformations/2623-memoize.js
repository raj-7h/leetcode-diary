/**
 * ✅ Problem Name: [Replace with Problem Name]
 * ✅ LeetCode Problem Number: [Replace with Problem Number]
 * ✅ Difficulty: [Easy | Medium | Hard]
 * ✅ Date Solved: [YYYY-MM-DD]
 *
 * 🧠 Description:
 * [Write a short summary or copy the description from LeetCode]
 *
 * 🧪 Examples:
 * Input:
 * Output: 
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
