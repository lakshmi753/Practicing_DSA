const array = [5, 3, 6, 1, 2, 4, 9];
console.log(array);

const n = 3; // swap 2nd element from left with the 2nd element from right;

let temp = array[n-1];
array[n-1] = array[array.length-n];
array[array.length-n] = temp;

console.log(array);
// O(1)..............