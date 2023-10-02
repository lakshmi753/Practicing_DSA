// Exponential search involves two steps:
// 1.Find range where element is present
// 2.Do Binary Search in above found range.
// Array should be sorted.

// Exponential Binary Search is particularly useful for unbounded searches,
// where size of array is infinite.

const array = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 66;
const length = array.length;

const exponentialSearch = function (arr, x, n) {
  if (arr[0] === x) {
    return 0;
  }

  let i = 1;
  while (i < n && arr[i] <= x) {
    i = i * 2;
  }

  return binarySearch(arr, i / 2, Math.min(i, n - 1), x); // Math,min(i, n-1)---> returns the smallest among the "i and n-1".
};

const binarySearch = function (arr, l, r, x) {
  while (r >= l) {
    let mid = l + Math.round((r - l) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      //   return binarySearch(arr, l, mid-1, x); // recursion...
      r = mid - 1;
    } else if (arr[mid] < x) {
      // return binarySearch(arr, mid+1, r, x);  // recursion...
      l = mid + 1;
    }
  }
  return false;
};

const result = exponentialSearch(array, target, length);
console.log(result);

// Time Complexity : O(Log n)
