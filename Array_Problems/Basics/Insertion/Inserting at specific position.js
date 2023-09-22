const array = [40, 50, 30, 70, 20, 90];
const length = array.length;
const insertEl = 60;
const position = 4;

const insertingElementAtGivenPos = function (arr, n, x, pos) {
  let i = n - 1;
  for (i; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }
  arr[pos] = x;

  return arr;
};

console.log(array, length);

const result = insertingElementAtGivenPos(array, length, insertEl, position);
console.log(result, array.length);

// Time Complexity O(n).
