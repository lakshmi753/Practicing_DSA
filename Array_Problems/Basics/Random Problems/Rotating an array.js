// 1. One way..........

// const array = [1, 2, 3, 4, 5, 6, 7];
// const num = 4;
// let count = 0;

// const leftRotate = function(arr, n, c){

//     for(let i=0; i<arr.length; i++){

//        let removedEl =  arr.shift();

//        arr.push(removedEl);

//        c++;

//        if(c === n){
//         return arr;
//        }
//     }
// }

// console.log(array);
// console.log(leftRotate(array, num, count));

// Time complexity---> O(n^2)..........

// 2. Another way...................................

const array1 = [1, 2, 3, 4, 5, 6, 7];
let num1 = 3;

const rotate = function(arr, n){
    const length = arr.length;
    n = n % length; // to handle case where n > length(length of array).

    // reverse the elements from index[0] to index[n-1]
    reverse(arr, 0, n-1);

    // reverse the elements from index[n] to index[length-1]
    reverse(arr, n, length-1);

    // reverse the entire array so formed
    reverse(arr, 0, length-1);

    return arr;
}

function reverse(arr, start, end){

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

console.log(array1);
console.log(rotate(array1, num1));

// Time compleexity---> O(n)...........