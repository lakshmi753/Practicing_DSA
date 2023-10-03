// Sentinel Linear searching.......................

// 1. The basic idea of Sentinel Linear Search is to add an extra element at the end of the array 
// (i.e., the sentinel value) that matches the search key. 

// 2. By doing so, we can avoid the conditional check for the end of the array in the loop and terminate the search early,
//  as soon as we find the sentinel element. 

// 3. This eliminates the need for a separate check for the end of the array, 
//  resulting in a slight improvement in the average case performance of the algorithm.

// Example : -
// Input: arr[] = {10, 20, 180, 30, 60, 50, 110, 100, 70}, x = 180 
// Output: 180 is present at index 2

const array = [10, 20, 180, 30, 60, 50, 110, 100, 70];
const findNum = 180; // searching element.

const lastEl = array[array.length - 1]; // last element.
let i = 0;    

// replacing the last element of the array with the "searching element".
array[array.length - 1] = findNum;

const findIndexOfNum = function(arr, num){

    while(arr[i] !== num){
        i++;
    }

    // putting the last element back to it's original value.
    arr[arr.length - 1] = lastEl;

    if(i < arr.length - 1 || lastEl === num){
        return i;
    }
    else{
        return -1;
    }
}

const index = findIndexOfNum(array, findNum);

if(index === -1){
    console.log(`${findNum} is not found !!!`)
}
else{
    console.log(`${findNum} found at index ${index}`);
}

// The key benefit of the Sentinel Linear Search algorithm is that it eliminates the need for a separate check 
// for the end of the array, which can improve the average case performance of the algorithm. 
// However, it does not improve the worst-case performance, which is still O(n) (where n is the size of the array), 
// as we may need to scan the entire array to find the sentinel value.