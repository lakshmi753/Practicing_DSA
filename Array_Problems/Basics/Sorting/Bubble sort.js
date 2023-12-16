const array = [50, 20, 90, 10, 30, 60, 80];
console.log(array);

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const result = bubbleSort(array);
console.log(result);

// Time complexity ---> O(n^2)
// Space complexity ---> O(1).
