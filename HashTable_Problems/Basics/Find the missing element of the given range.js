/* Q: Given an array, arr[0..n-1] of distinct elements and a range [low, high], find all numbers that are in a range, but not the array. The missing elements should be printed in sorted order.

Examples:--  

Input: arr[] = {10, 12, 11, 15}, 
       low = 10, high = 15
Output: 13, 14

Input: arr[] = {1, 14, 11, 51, 15}, 
       low = 50, high = 55
Output: 50, 52, 53, 54 55 */

function missingElOfTheRange(arr, low, high) {
  let obj = new Set();

  for (let i = 0; i < arr.length; i++) {
    obj.add(arr[i]);
  }

  for (let i = low; i <= high; i++) {
    if (!obj.has(i)) {
      console.log(i);
    }
  }
}

const arr1 = [10, 12, 11, 15];
const low = 10;
const high = 15;

missingElOfTheRange(arr1, low, high);

/* Time Complexity: O(n+m), where n is the length of the input array "arr", and m is the number of elements in the range [low, high].
   Space Complexity: O(n), where n is the length of the input array "arr". */
