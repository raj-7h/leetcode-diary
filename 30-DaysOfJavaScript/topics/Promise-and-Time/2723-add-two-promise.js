/**
 * ✅ Problem Name: [Add Two Promise]
 * ✅ LeetCode Problem Number: [2723]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-27]
 *
 * 🧠 Description:
 * [Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
 * The returned promise should resolve with the sum of the two numbers.]
 *
 * 🧪 Examples:
 * 
 Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 *
 * 💡 Approach:
 * [
 	• Return a new promise that:
	• Creates two variables:
		- res1 to store the response from promise1.
		- res2 to store the response from promise2.
	• Returns the sum of res1 and res2 as the final response from the new promise.
  ]
 *
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (res, req) => {
    const res1 = await promise1;
    const res2 = await promise2;
    res(prom + pron);
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
