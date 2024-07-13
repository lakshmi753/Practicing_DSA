/* Q: Given two arrays A[] and B[] consisting of n and m elements respectively. Find the minimum number of elements to remove from each array such that no common element exist in both.

Examples: 

Input : A[] = { 1, 2, 3, 4}
        B[] = { 2, 3, 4, 5, 8 }
Output : 3
We need to remove 2, 3 and 4 from any array.

Input : A[] = { 4, 2, 4, 4}
        B[] = { 4, 3 }
Output : 1
We need to remove 4 from B[]

Input : A[] = { 1, 2, 3, 4 }
        B[] = { 5, 6, 7 }
Output : 0
There is no common element in both. */

function removeMiniNumOfEleFromArrays(arr1, arr2) {
  let map1 = new Map();
  let map2 = new Map();
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    map1.set(arr1[i], map1.get(arr1[i] || 0) + 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    map2.set(arr2[i], map2.get(arr2[i] || 0) + 1);
  }

  for (let el of map1.keys()) {
    if (map2.has(el)) {
      count = count + 1;
    }
  }

  return count;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5, 8];

console.log(removeMiniNumOfEleFromArrays(arr1, arr2));
