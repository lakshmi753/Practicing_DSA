// So the sequence of operations is:--

// 1.Reverse the whole array
// 2.Then reverse the last ‘d’ elements and
// 3.Then reverse the first (N-d) elements.
// N is total length of array.

// As we are performing reverse operations it is also similar to the following sequence:--

// 1.Reverse the first ‘d’ elements
// 2.Reverse last (N-d) elements
// 3.Reverse the whole array.

const array = [10, 20, 30, 40, 50, 60, 70];
const rotateTillPos = 3;

const reverseArr = function (arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
};

const rotateByReversal = function (arr, pos) {
  // reversing the array till "pos" ...........
  reverseArr(arr, 0, pos);
  console.log(arr);

  // reversing the array after "pos"...........
  reverseArr(arr, pos + 1, arr.length - 1);
  console.log(arr);

  // reversing the whole array.................
  reverseArr(arr, 0, arr.length - 1);

  return arr;
};

const result = rotateByReversal(array, rotateTillPos);
console.log(result);

// Time Complexity: O(n).
