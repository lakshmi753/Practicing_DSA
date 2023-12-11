// APPROACH 1.
const arr1 = [20, 49, 99, 34, 89, 243];

const threeLargestNum = function (arr) {
  let len = arr.length;
  let first, second, third;
  first = second = third = -Infinity;

  for (let i = 0; i < len; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }

  console.log(first, second, third);
};

threeLargestNum(arr1);

// Time complexity ---> O(n).

// APPROACH 2.
const arr2 = [489, 506, 873, 2303, 4514, 319];

const threeLargestNumber = function (arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);

  let len = 3;

  for (let i = 0; i < len; i++) {
    console.log(arr[i]);
  }
};

threeLargestNumber(arr2);

// Time complexity ---> O(nlogn).  (more better).
