const array = [2, 3, 5, 5];
// const arr = [];
// const arr1 = [];

// for(let i=0; i<array.length; i++){
//     arr[arr.length] = array[i];
//     arr1.push(array[i]);
// }

// console.log(arr, arr1);

const stringForm = array.toString().split(',').join(' ');
console.log(stringForm);