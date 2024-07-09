/* Q:Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

Examples: 

Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes
Explanation: If we calculate the sum of the output,1 + (-3) = -2 */

function pairWithSum(arr, sum) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = sum - arr[i];

    /* complement is a value that when added to the arr[i] will return 'sum'.
      Eg: sum = 10
        arr[i] = 7
        complement = 10 - 7 = 3
        So, 7(arr[i]) + 3(complement) = 10(sum)*/

    // when object is not having the property we are checking for it will return "undefined".....
    if (obj[complement] !== undefined) {
      return `YES, ${arr[i]} and ${complement}`;
    }

    obj[arr[i]] = true;
  }

  return "NOT FOUND";
}

const arr = [0, -1, 2, -3, 1];
const sum = -2;

console.log(pairWithSum(arr, sum));

/*--> This solution has a time complexity of O(n), where 𝑛
 is the number of elements in the array, because we only pass through the array once. The space complexity is also O(n) due to the storage required for the hash table.*/
