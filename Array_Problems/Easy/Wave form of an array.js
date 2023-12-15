// WAVE FORM OF AN ARRAY : --

// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80}
// Explanation:--
/* Here you can see {10, 5, 6, 2, 20, 3, 100, 80} first element is larger than the second and the same thing is repeated again and again. large element – small element-large element -small element and so on .it can be small element-larger element – small element-large element -small element too. */

const arr1 = [45, 23, 67, 98, 50, 47, 90];
arr1.sort((a, b) => a - b); // sorting the array in ascending order.
//console.log(arr1);
const length = arr1.length - 1;

const swap = function (arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const waveFormArray = function (arr, len) {
  for (let i = 0; i < len; i += 2) {
    swap(arr, i, i + 1);
  }

  // console.log(arr);
};

waveFormArray(arr1, length);

// Time complexity ---> O(nlogn)(better)
// Space complexity ---> O(1).

// Making even positioned element greater..............

const arr2 = [45, 203, 67, 98, 50, 407, 90, 89, 100];
console.log(arr2);
const length1 = arr2.length - 1;

const wave_form_array = function (arr, len) {
  let temp;
  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
      if (arr[i] < arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  console.log(arr);
};

wave_form_array(arr2, length1);

// Time complexity ---> O(n)
// Space complexity ---> O(1);
