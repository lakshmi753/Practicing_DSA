/* Q: Find wheather an array is subset of another array ?

--> Given two arrays: arr1[0..m-1] and arr2[0..n-1]. Find whether arr2[] is a subset of arr1[] or not. Both arrays are not in sorted order. It may be assumed that elements in both arrays are distinct.

Examples: 

Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
Output: arr2[] is a subset of arr1[]

Input: arr1[] = {1, 2, 3, 4, 5, 6}, arr2[] = {1, 2, 4} 
Output: arr2[] is a subset of arr1[] */

function isSubsetofAnother(arr1, arr2) {
  const arrSet1 = new Set(arr1);
  //console.log(arrSet1);

  for (let el of arr2) {
    if (!arrSet1.has(el)) {
      return false;
    }
  }

  return true;
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 8, 1];

const result = isSubsetofAnother(arr1, arr2);

console.log(
  result ? `${arr2} is subset of ${arr1}` : `${arr2} is not subset of ${arr1}`
);

// Time complexity --> O(m+n);  - Inserting all elements of `arr1` into a `Set` takes O(m) time, where `m` is the number of elements in `arr1`
// - Checking each element of `arr2` for membership in `setArr1` takes O(1) time per check.
// - Since there are `n` elements in `arr2`, the total time for this step is O(n).

// Space complexity --> O(m);   - The `Set` will store up to `m` elements (all elements of `arr1`), so the space complexity for the `Set` is O(m).
