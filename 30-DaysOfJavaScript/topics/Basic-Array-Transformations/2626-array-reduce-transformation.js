/**
 * ✅ Problem Name: [Array Reduce Transformation]
 * ✅ LeetCode Problem Number: [2626]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-04-25]
 *
 * 🧠 Description:
 * [Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially,
 *  passing in the return value from the calculation on the preceding element.]
 *
 * 🧪 Examples:
 * Example 1:
 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.

Example 2:

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
 
 * 💡 Approach:
 * [•	Create two variables:
	    •	val to store the result
	    •	index to iterate in the while loop
	•	Use an if condition to check whether the array is empty:
	    •	If the array is empty, return init as specified in the question
	•	Otherwise, enter the while loop:
	    •	In each iteration, call the function fn (provided as a parameter in the reduce function), passing in val and the current element of the array
	    •	Store the return value of fn in val
	    •	Update init with the new val (optional if reusing val)
	    •	Increment index to continue the loop
	•	After the loop ends, return val
  ]
 *
 */
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  var val = 0;
  var index = 0;
  if (nums.length === 0) {
    return init;
  } else {
    while (index < nums.length) {
      val = fn(init, nums[index]);
      init = val;
      index++;
    }
  }
  return val;
};
