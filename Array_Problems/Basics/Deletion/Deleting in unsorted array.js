const findPosition = function (arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
};

const deletingEl = function (arr, n, x) {
  // getting the "position of the target element"...
  let pos = findPosition(arr, n, x);

  if (pos === -1) {
    return n;
  }

  // deleting the target element...
  for (let i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();
  return arr;
};

let array = [50, 80, 10, 60, 100, 30, 20];
let length = array.length;
const target = 60;

console.log(array);
const result = deletingEl(array, length, target);
console.log(result);
