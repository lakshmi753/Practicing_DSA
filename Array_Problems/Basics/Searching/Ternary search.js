// Best case time complexity is O(1), and worst-case complexity is O (log N base 3).

// mid1 = l + (r-l)/3 
// mid2 = r – (r-l)/3 

// Steps to perform Ternary Search: 

// 1. First, we compare the key with the element at mid1. If found equal, we return mid1.
// 2. If not, then we compare the key with the element at mid2. If found equal, we return mid2.
// 3. If not, then we check whether the key is less than the element at mid1. If yes, then recur to the first part.
// 4. If not, then we check whether the key is greater than the element at mid2. If yes, then recur to the third part.
// 5. If not, then we recur to the second (middle) part.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 9;

let left = 0;
let right = array.length;

const ternarySearch = function(arr, findNum, l, r){

    let mid1 = l + Math.round((r-l)/3) ;
    let mid2 = r - Math.round((r-l)/3) ;

    while( mid2 >= mid1){

        if(arr[mid1] === findNum){
            return mid1;
        }
        else if(arr[mid2] === findNum){
            return mid2;
        }
        else if(findNum < arr[mid1]){
            r = mid1 - 1;
        }
        else if(findNum > arr[mid2]){
            l = mid2 + 1;
        }
        else{
            l = mid1 + 1;
            r = mid2 - 1;
        }

        mid1 = l + Math.round((r-l)/3) ;
        mid2 = r - Math.round((r-l)/3) ;
    }

    return false;

}

const result1 = ternarySearch(array, target, left, right);
console.log(result1);
 