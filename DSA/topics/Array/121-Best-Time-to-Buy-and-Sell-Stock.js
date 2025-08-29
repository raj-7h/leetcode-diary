/**
 * ✅ Problem Name: [Best Time to Buy and Sell Stock]
 * ✅ LeetCode Problem Number: [121]
 * ✅ Difficulty: [Easy]
 * ✅ Date Solved: [2025-08-29]
 *
 * 🧠 Description:
 * [You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.]
 *
 🧪 Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

🧪 Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * 💡 Approach:
	•	Create two variables:
	•	buy → to keep track of the minimum price so far
	•	profit → to keep track of the maximum profit so far
	•	Initialize:
	•	buy = prices[0]
	•	profit = 0
	•	Iterate through the prices array starting from index 1:
	•	If the current price is less than buy, update buy with this price
	•	Otherwise, calculate currentProfit = currentPrice - buy
	•	Update profit = max(profit, currentProfit)
	•	After finishing the loop, return profit as the result
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) buy = prices[i];
    else profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};
