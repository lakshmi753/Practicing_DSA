const array = [50, 20, 90, 10, 30, 60, 80];
console.log(array);

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

const result = selectionSort(array);
console.log(result);
