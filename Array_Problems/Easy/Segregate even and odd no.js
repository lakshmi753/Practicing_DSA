// Q : Segregate even and odd numbers : Given an array arr[] of integers, segregate even and odd numbers in the array such that all the even numbers should be present first, and then the odd numbers.?
// EXAMPLE : -
// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

// SOLUTION : -

const arr1 = [7, 2, 9, 4, 6, 1, 3, 8, 5];
console.log(arr1);
const length = arr1.length;

const SegregateEvenAndOddNum = function (arr, len) {
  let i = 0;

  for (let j = 0; j < len; j++) {
    if (arr[j] % 2 == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  console.log(arr);
};

SegregateEvenAndOddNum(arr1, length);

// Time complexity ---> O(n)
// Space complexity ---> O(1).
