const array = [7, 8, 3, 4, 2, 9, 5, 6, 10];  

// when we start removing the elements one by one (starting from the largest element i.e from the right) alternatively(means one from right one from left).
// the last element left(remains) will always be the middle element.......
const sortedArray = array.sort((a, b) => a-b);  // O(n(logn))

const num = sortedArray.length;
let mid;

const remainingElement = function(arr, n){
    // checking wheather the length of array is even or not...
    if(n%2 === 0){
        mid = Math.round(n/2);
        console.log(arr[mid-1]);
    }
    else{
        mid = Math.round((n+1)/2);
        console.log(arr[mid-1]);
    }

}

remainingElement(sortedArray, num);

// Time complexity ---> O(n(logn))
