// WAY 1.
const arr1 = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(arr1);
const length = arr1.length;

const moveZeroToEnd = function (arr, len) {
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < len) {
    arr[count++] = 0;
  }

  console.log(arr);
};

moveZeroToEnd(arr1, length);

// Time complexity ---> O(n)
// Space complexity ---> O(1).

// WAY 2.

const arr2 = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(arr2);
const length1 = arr2.length;

let j = 0;

const moveZeroToTheEnd = function (arr, len, j) {
  for (let i = 0; i < len; i++) {
    if (arr[i] != 0) {
      swap(arr, j, i);
      j++;
    }
  }

  console.log(arr);
};

function swap(arr, j, i) {
  let temp;
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

moveZeroToTheEnd(arr2, length, j);

// Time complexity ---> O(n)
// Space complexity ---> O(1).
