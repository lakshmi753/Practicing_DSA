// 1. Start with an unsorted array of n elements.
// 2. Initialize a variable, cycleStart, to 0.
// 3. For each element in the array, compare it with every other element to its right. If there are any elements that are smaller than the current element, increment cycleStart.
// 4. If cycleStart is still 0 after comparing the first element with all other elements, move to the next element and repeat step 3.
// 5. Once a smaller element is found, swap the current element with the first element in its cycle. The cycle is then continued until the current element returns to its original position.
// Repeat steps 3-5 until all cycles have been completed.

const arr1 = [10, 2, 3, 5, 1, 6, 70];
console.log(arr1);
const length = arr1.length;

const cycleSort = function (arr, len) {
  let index = arr[0];
  let pos;
  let temp;

  for (let i = 0; i < len; i++) {
    pos = 0;
    for (let j = 0; j < len; j++) {
      if (arr[j] < index) {
        pos++;
      }
    }

    temp = index;
    index = arr[pos];
    arr[pos] = temp;
  }

  console.log(arr);
};

cycleSort(arr1, length);

// Time complexity ---> O(n^2)
// Space complexity ---> O(1).
