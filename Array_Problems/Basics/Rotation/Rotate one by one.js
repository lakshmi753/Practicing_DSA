const array = [10, 20, 30, 40, 50, 60, 70];
console.log(array);
const lengthArr = 3;

const rotateOneByOne = function (arr, n) {
  for (let i = 0; i < n; i++) {
    let num = arr.shift();
    arr.push(num);
  }
  console.log(arr);
};

rotateOneByOne(array, lengthArr);

// Time Complexity: O(n * d).
