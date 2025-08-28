/**
 * ✅ Problem Name: [Pascal's Triangle II]
 * ✅ LeetCode Problem Number: [119]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-28]
 *
 * 🧠 Description:
 * [Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.]
 *
 🧪Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

🧪Example 2:
Input: rowIndex = 0
Output: [1]

🧪Example 3:
Input: rowIndex = 1
Output: [1,1]
 *
💡 Approach — Pascal’s Triangle II
	1.	Start with an empty structure called triangle, which will hold the rows built so far.
	2.	For each row index from 0 up to rowIndex:
	•	Create a new array called row to store the current row’s values.
	3.	Within this row:
	•	If the position is at the beginning or end → place 1.
	•	Otherwise → take the two numbers from the row above (one above-left and one above-right) and add them together. This sum becomes the current value.
	4.	After finishing the row:
	•	If the current row index equals rowIndex, return this row as the answer.
	•	Otherwise, append it to triangle so the next row can be built.
	5.	The process stops once rowIndex is reached, so we don’t need to build the full triangle.
 *
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const triangle = [];
  for (let i = 0; i <= rowIndex; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row.push(1);
      else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    if (i === rowIndex) return row;
    triangle.push(row);
  }
};
