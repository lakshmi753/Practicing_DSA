/* Q: Given an array, find the most frequent element in it. If there are multiple elements that appear a maximum number of times, print any one of them.

Examples: 

Input : arr[] = {1, 3, 2, 1, 4, 1}
Output : 1
Explanation: 1 appears three times in array which is maximum frequency.

Input : arr[] = {10, 20, 10, 20, 30, 20, 20}
Output : 20 */

function mostFrequentElInArr(arr, len) {
  let obj = {};
  let most_freqEl = 0;
  let num = null;

  for (let i = 0; i < len; i++) {
    if (obj[arr[i]] !== undefined) {
      obj[arr[i]] = obj[arr[i]] + 1;

      let temp = obj[arr[i]];

      num = temp > most_freqEl ? arr[i] : num;

      most_freqEl = temp > most_freqEl ? temp : most_freqEl;
    } else {
      obj[arr[i]] = 1;
    }
  }

  if (most_freqEl !== 0) {
    return `Element ${num} is the most frequent element appears ${most_freqEl} times in the array.`;
  } else {
    return `No repeated element found!`;
  }
}

const arr1 = [30, 20, 10, 40, 50];
const length = arr1.length;

console.log(mostFrequentElInArr(arr1, length));

// Time complexity --> O(n)
// Space Complexity --> O(n)
