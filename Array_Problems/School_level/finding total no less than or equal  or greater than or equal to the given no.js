// 1. One way (using "for loop")..............

const array = [1, 2, 8, 10, 11, 12, 19];
const num1 = 10;

const totalNoGreaterThanOrSmallerThan = function(arr){
    let count1 = 0;
    let count2 = 0;

    for(let i=0; i<arr.length; i++){

        if(arr[i] <= num1){
            count1++;
        }
        else if(arr[i] >= num1){
            count2++;
        }
    }

    console.log(count1, count2);
}

totalNoGreaterThanOrSmallerThan(array);

// Time complexity O(n)............

// 2. Another solution (using "Binary search algorithm").................

// function findElementsCount(array, X) {
//     function binarySearch(arr, n, isLessThan) {
//       let left = 0;
//       let right = arr.length - 1;
//       let result = -1;
  
//       while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
  
//         if (arr[mid] === n) {
//           result = mid;
//           break;
//         } else if (arr[mid] < n) {
//           left = mid + 1;
//           if (isLessThan) result = mid;
//         } else {
//           right = mid - 1;
//           if (!isLessThan) result = mid;
//         }
//       }
  
//       return result;
//     }
  
//     const lessThanOrEqualIndex = binarySearch(array, X, true);
//     const moreThanOrEqualIndex = binarySearch(array, X, false);
  
//     let lessThanOrEqualCount = 0;
//     let moreThanOrEqualCount = 0;
  
//     if (lessThanOrEqualIndex !== -1) {
//       lessThanOrEqualCount = lessThanOrEqualIndex + 1;
//     }
  
//     if (moreThanOrEqualIndex !== -1) {
//       moreThanOrEqualCount = array.length - moreThanOrEqualIndex;
//     }
  
//     return {
//       lessThanOrEqualCount,
//       moreThanOrEqualCount,
//     };
//   }
  
//   // Example usage:
//   const sortedArray = [1, 3, 5, 7, 9, 11, 13];
//   const num2 = 6;
//   const result = findElementsCount(sortedArray, num2);
//   console.log("Number of elements less than or equal to X:", result.lessThanOrEqualCount);
//   console.log("Number of elements more than or equal to X:", result.moreThanOrEqualCount);
  
// The time complexity of the above solution is O(log N), where N is the number of elements in the sorted array.
// The reason for this time complexity comes from the binary search algorithm used to find the indices of the closest element that is less than or equal to X and the closest element that is more than or equal to X. 
// In each binary search, the search space is halved at each step, and we continue searching until we find the target element or narrow down the search space to a single element. 
// This binary search process results in a logarithmic time complexity, making the algorithm efficient even for large sorted arrays.
