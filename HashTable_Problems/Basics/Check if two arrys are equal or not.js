/* Q: Given two arrays, arr1 and arr2 of equal length N, the task is to determine if the given arrays are equal or not. Two arrays are considered equal if:

Both arrays contain the same set of elements.
The arrangements (or permutations) of elements may be different.
If there are repeated elements, the counts of each element must be the same in both arrays.

Examples:- 

Input: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
Output: Yes

Input: arr1[] = {1, 2, 5, 4, 0, 2, 1}, arr2[] = {2, 4, 5, 0, 1, 1, 2} 
Output: Yes */

// 1. Using "Maps"............................

function checkIfTwoArrAreEqual(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  if (len1 !== len2) return "false1";

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < len1; i++) {
    map1.set(arr1[i], (map1.get(arr1[i]) || 0) + 1);
  }

  for (let i = 0; i < len2; i++) {
    map2.set(arr2[i], (map2.get(arr2[i]) || 0) + 1);
  }

  if (map1.size !== map2.size) return "false2";

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return "false3";
    }
  }

  return true;
}

const arr1 = [1, 2, 5, 4, 0, 1];
const arr2 = [2, 4, 5, 0, 0, 1];

console.log(checkIfTwoArrAreEqual(arr1, arr2));

// Time complexity --> O(n);
// Space complexity --> O(n);

// 2. Using regular javascript "objects"..........

function checkForEqualityOfArr(arr3, arr4) {
  let len3 = arr3.length;
  let len4 = arr4.length;

  if (len3 !== len4) return "false1";

  let obj3 = {};
  let obj4 = {};

  for (let el of arr3) {
    obj3[el] = (obj3[el] || 0) + 1;
  }

  for (let el of arr4) {
    obj4[el] = (obj4[el] || 0) + 1;
  }

  for (let key in arr3) {
    if (obj3[key] !== obj4[key]) {
      return "false2";
    }
  }

  return true;
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [2, 3, 2, 1, 4];

console.log(checkForEqualityOfArr(arr3, arr4));

// Time complexity --> O(n)
// Space complexity --> O(n).

/* --> Differences Between Objects and Maps
1. Key Types:--
* Objects: The keys of an object are always strings (or symbols). If you use a       number as a key, it is converted to a string.
* Maps: A Map can have keys of any type, including objects, functions, and other primitive types.

2. Ordering:--
* Objects: The keys are not guaranteed to be in any specific order.
* Maps: Keys are ordered based on the order of insertion.

3. Default Properties:--
* Objects: Regular objects have a prototype chain and come with default properties (e.g., toString), which can lead to potential issues if not handled properly.
* Maps: Map objects do not have any default keys and are purely for storing key-value pairs.

4. Performance:--
* Objects: For smaller datasets or simple tasks, objects are typically more performant.
* Maps: For larger datasets or cases where keys are not strings, Map can be more efficient and offer better performance. */
