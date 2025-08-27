/**
 * ✅ Problem Name: [Pascal's Triangle]
 * ✅ LeetCode Problem Number: [118]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-27]
 *
 * 🧠 Description:
 * [Given an integer numRows, return the first numRows of Pascal's triangle.]
 *
 * 🧪 Examples:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]
 *
💡 Approach — Pascal’s Triangle
	1.	Start with an empty structure called triangle, which will hold all the rows.
	2.	For each row index from 0 to numRows - 1:
	•	Create a new list called row to store the current row’s values.
	3.	Within this row:
	•	If the position is at the beginning or end, place 1.
	•	Otherwise, take the two numbers from the row above (one just above-left and one just above-right) and add them together. This sum becomes the current value.
	4.	After finishing the row, append it to the triangle.
	5.	Continue until all rows are built, then return the full triangle.
 *
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        let sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
        row.push(sum);
      }
    }
    triangle.push(row);
  }
  return triangle;
};
