const array = [3, 2, 1, 56, 10000, 167, 0];

const getMinMax = function (arr) {
  let max = arr[0];
  let min = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min, max);
};

getMinMax(array);

// Time complexity ---> O(n).....
