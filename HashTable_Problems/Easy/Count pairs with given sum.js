/* Q:Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

Examples:  

Input: arr[] = {1, 5, 7, -1}, K = 6
Output:  2
Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

Input: arr[] = {1, 5, 7, -1, 5}, K = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).         

Input: arr[] = {1, 1, 1, 1}, K = 2
Output:  6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).

Input: arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, K = 11
Output:  9
Explanation: Pairs with sum 11 are (10, 1), (10, 1), (10, 1), (12, -1), (10, 1), (10, 1), (10, 1), (7, 4), (6, 5). */

function countPairs(arr, k) {
  let map1 = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let complement = k - arr[i];

    if (map1.has(complement)) {
      count = count + map1.get(complement);
    }
    map1.set(arr[i], (map1.get(arr[i]) || 0) + 1);
  }

  return `${count > 0 ? count : "No pairs exists"}`;
}

//const arr1 = [1, 5, 7, -1];
const arr1 = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
const sum = 11;

console.log(countPairs(arr1, sum));

// Time complexity --> O(n)
// Space complexity --> O(n)
