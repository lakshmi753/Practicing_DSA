// Like Binary Search, Jump Search is a searching algorithm for sorted arrays.
// The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps
//or skipping some elements in place of searching all elements.

const array = [0, 4, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 370;
const jump = Math.round(Math.sqrt(array.length));
// console.log(jump);

const jumpSearch = function (arr, findNum, j) {
  let previous;
  let next;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
      return i;
    } else if (arr[i] < findNum) {
      if (arr.length - 1 - i !== j) {
        next = arr.length;
        previous = i;
        break;
      } else {
        i = i + j;
        previous = i;
      }
    } else if (arr[i] > findNum) {
      next = i;
      i = previous;
      break;
    }
  }

  for (let i = previous; i < next; i++) {
    if (arr[i] === findNum) {
      return i;
    }
  }

  return false;
};

const result = jumpSearch(array, target, jump);
console.log(result);

// Performance in comparison to linear and binary search:
// If we compare it with linear and binary search then it comes out then it is better than linear search but not better than binary search.
//  Jump Search takes O(√ n) time .

// The increasing order of performance is:

// linear search  <  jump search  <  Binary search
