const array = [1, 2, 3, 5, 5, 6];
const key = 5;
const arr1 = [];

const printIndexOfKey = function(arr, n){
// finding the index of the given element from the left (first occurence)...........
 for(let i=0; i<arr.length; i++){
    if(arr[i] === n){
        arr1.push(i);
        break;
    }
 }

// finding the index of the given element from the right (first occurense)...........
 for(let j = arr.length; j>1; j--){
    if(arr[j] === n){
        arr1.push(j);
        break;
    }
 }

 return arr1;

}

console.log(printIndexOfKey(array, key));
// O(n)......................