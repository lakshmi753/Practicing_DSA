// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.

// To apply Binary Search algorithm:--
// 1. The data structure must be sorted.
// 2. Access to any element of the data structure takes constant time.


const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 30;

const findingTargetElement = function(arr, findNum){

    let low = 0;
    let high = arr.length-1;

    while(high >= low){

    let mid = low + Math.round((high - low)/2); // calculating the index of the "middle element".

    if(arr[mid] === findNum){
        return mid;
    }
    else if(arr[mid] < findNum){
        low = mid + 1;
    }
    else if(arr[mid] > findNum){
        high = mid - 1;
    }
  }

  return -1;
}

const result = findingTargetElement(array, target);
result === -1 ? console.log('Element not found !!!') : console.log('Element found at' +' '+ result);

// Time complexity ---> O(log n)...
