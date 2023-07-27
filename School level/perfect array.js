const array = [1, 2, 3, 2, 1];
const arr1 = [];

const prfectArray = function(arr){

    for(let i=arr.length-1; i>=0; i--){
        arr1.push(arr[i]);

    }
     console.log(arr1);
    // comparing the length of two arrays.............
    if(arr1.length !== arr.length){
        return false;
    }

    // 1. comparing all the elements of both the arrays............
    // for(let i=0; i<arr1.length; i++){
    //     if(arr1[i] !== arr[i]){
    //         return false;
    //     }
    // }

    // 2. comparing all the elements of both the arrays..........
     return arr1.every((el, i) => el === arr[i]);

    //return true;
}

console.log(prfectArray(array));

// The time complexity of the array comparison using the "every() method" would be O(n), where "n" is the length of the arrays being compared.
// The every() method iterates through each element of the array and applies a provided callback function to check if every element satisfies a certain condition. 
// In this case, the callback function simply compares the elements of the two arrays. 
// Since the function checks each element once, the time complexity is directly proportional to the number of elements in the arrays
// Time complexity O(n)............