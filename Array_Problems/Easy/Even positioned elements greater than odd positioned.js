const arr1 = [1, 3, 2, 2, 5]; // [1,2,2,3,5]

arr1.sort((a, b) => a - b);
console.log(arr1);

const length = arr1.length;

const evenPosGreaterThanOddPos = function (arr, len) {
  let arr2 = [];
  let p = 0;
  let q = len - 1;

  for (let i = 0; i < len; i++) {
    if ((i + 1) % 2 == 0) {
      arr2[i] = arr[q--];
    } else {
      arr2[i] = arr[p++];
    }
  }

  console.log(arr2); // [1,5,2,3,2]
};

evenPosGreaterThanOddPos(arr1, length);

// Time complexity ---> O(nlogn)
// Space complexity ---> O(n).
