/**
 * ✅ Problem Name: [Plus One]
 * ✅ LeetCode Problem Number: [66]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-19]
 *
 * 🧠 Description:
 * [
 * You are given a large integer represented as an integer array digits,
 *  where each digits[i] is the ith digit of the integer. The digits are ordered from 
 * most significant to least significant in left-to-right order. The large integer does
 *  not contain any leading 0's. Increment the large integer by one and return the
 *  resulting array of digits.

]
 *
 * 🧪 Examples:
 * Input: 
 digits = [1,2,3]
 * Output: 
[1,2,4]
 
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 💡 **Approach**  
	•	Start from the last element of the array (rightmost digit).
	•	Increment it by 1.
	    •	If the digit becomes less than 10, return the array immediately (no carry-over needed).
	    •	If the digit becomes 10, set it to 0 and continue the loop to handle the carry with the next digit.
	•	If the loop finishes (all digits turned into 0), insert 1 at the front to handle cases like [9,9,9] → [1,0,0,0].
 
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
