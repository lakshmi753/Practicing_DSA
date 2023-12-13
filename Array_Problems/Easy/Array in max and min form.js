// Q : Rearrange an array in maximum minimum form using Two Pointer Technique ?
// EXAMPLE : -
//Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
//Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

// SOLUTION : -
/* The idea is to use an auxiliary array. We maintain two pointers one to the leftmost or smallest element and the other to the rightmost or largest element. We move both pointers toward each other and alternatively copy elements at these pointers to an auxiliary array. Finally, we copy the auxiliary array back to the original array.*/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const length = arr1.length;
console.log(arr1);

const arrInMaxAndMinForm = function (arr, len) {
  let arr2 = new Array(len); // creating a new array of same length as 'arr'. [<6 empty items>]
  let small = 0;
  let large = len - 1;
  let isSmall = true;

  for (let i = 0; i < len; i++) {
    if (isSmall) {
      arr2[i] = arr[large--];
    } else {
      arr2[i] = arr[small++];
    }
    isSmall = !isSmall;
  }

  console.log(arr2);
};

arrInMaxAndMinForm(arr1, length);

// Time complexity --> O(n)
// Space complexity --> O(n).
