const array = [1, 2, 3, 4, 5, 6];
console.log(array);
const lengthArr = array.length - 1;

const reverse = function (arr, n) {
  let start = 0;
  let end = n;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  console.log(arr);
};

reverse(array, lengthArr);

// Time complexity = O(n)
