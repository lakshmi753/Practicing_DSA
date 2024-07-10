/* Q: Given an array with repeated elements, the task is to find the maximum distance between two occurrences of an element.

Examples:  

Input : arr[] = {3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2}
Output: 10
-> maximum distance for 2 is 11-1 = 10 
-> maximum distance for 1 is 4-2 = 2 
-> maximum distance for 4 is 10-5 = 5  */

// 1.(more advanced approach)..................

function max_distance(arr, len) {
  const obj = {};
  let max_dis = -1;

  for (let i = 0; i < len; i++) {
    if (obj[arr[i]] !== undefined) {
      let temp_dis = i - obj[arr[i]];
      max_dis = temp_dis > max_dis ? temp_dis : max_dis;
    } else {
      obj[arr[i]] = i;
    }
  }

  if (max_dis !== -1) {
    return max_dis;
  } else {
    return "No repeated elements found!";
  }
}

const arr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 3];
const len = arr.length;

//console.log(max_distance(arr, len));

// Time complexity --> O(n)
// Space complexity --> o(n)

//2.(more basic approach)..............

function maxDistance(arr, len) {
  const obj = {};
  let maxD = 0;

  for (let i = 0; i < len; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]][1] = i;
    } else {
      obj[arr[i]] = [i, i];
    }
  }

  for (let key in obj) {
    let tempD = obj[key][1] - obj[key][0];
    maxD = tempD > maxD ? tempD : maxD;
  }

  if (maxD !== 0) {
    return maxD;
  } else {
    return "No repeated element found!";
  }
}

const arr1 = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 3];
const len1 = arr1.length;

console.log(maxDistance(arr1, len1));
