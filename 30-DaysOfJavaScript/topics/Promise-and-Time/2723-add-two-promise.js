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
