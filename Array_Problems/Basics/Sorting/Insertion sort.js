const array = [50, 20, 90, 10, 30, 60, 80];
console.log(array);

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }
  }
  return arr;
};

const result = insertionSort(array);
console.log(result);

// Time complexity ---> O(n^2)
// Space complexity ---> O(1).
