// Q: Given an array of size n and multiple values around which we need to left rotate the array. How to quickly print multiple left rotations?

// Rotating one by one.........................
const arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1);
const num_rotate = 15; // number of rotations.

const leftRotate = function (arr, num) {
  for (let i = 0; i < num; i++) {
    let n = arr.shift();
    arr.push(n);
  }

  console.log(arr);
};

//leftRotate(arr1, num_rotate);

// The time complexity of the leftRotate function is O(num * arr.length), where 'num' is the number of rotations and 'arr.length' is the length of the array.
// Space complexity ---> O(1).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr2 = [1, 2, 3, 4, 5, 6];
const length = arr2.length;
const num_rotate1 = 15;

const rotateLeft = function (arr, len, k) {
  const mod = k % len;
  //let temp;

  for (let i = 0; i < len; i++) {
    // temp = arr[i]; // swaping took less no. of iterations to rotate the array compare to it's length.
    // Thing to note is --> no. of iterations would be less than (remainder*2) or (quotient*2) in "k % len";
    /*temp = arr[i]
    arr[i] = arr[(mod + i) % len];
    arr[(mod + i) % len] = temp;*/
    console.log(arr[(mod + i) % len]);
  }

  // console.log(arr);
};

rotateLeft(arr2, length, num_rotate1);

// Time complexity ---> O(n)
// Space complexity ---> O(1);
