const array = [10, 20, 30, 40, 50, 60, 70];
console.log(array);
const shiftEl = 3;

const rotateUsingTepmArr = function (arr, pos) {
  let tempArr = [];
  let j = 0;
  const n = arr.length;

  // first shifting the array from "pos" to "n-1" in the temporary array...
  for (let i = pos; i < n; i++) {
    tempArr[j] = arr[i];
    j++;
  }

  // now shifting array from "0" to "pos-1" in the temporary array...
  for (let i = 0; i < pos; i++) {
    tempArr[j] = arr[i];
    j++;
  }

  console.log(tempArr);
};

rotateUsingTepmArr(array, shiftEl);

// Time complexity: O(N) .
