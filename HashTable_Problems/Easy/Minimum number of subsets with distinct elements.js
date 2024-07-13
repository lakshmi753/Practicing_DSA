/* Q: You are given an array of n-element. You have to make subsets from the array such that no subset contain duplicate elements. Find out minimum number of subset possible.

Examples : 

Input : arr[] = {1, 2, 3, 4}
Output :1
Explanation : A single subset can contains all 
values and all values are distinct
Input : arr[] = {1, 2, 3, 3}
Output : 2
Explanation : We need to create two subsets {1, 2, 3} and {3} [or {1, 3} and {2, 3}] such that both subsets have distinct elements.

We basically need to find the most frequent element in the array. The result is equal to the frequency of the most frequent element. Since we have to create a subset such that each element in a subset is unique that means that all the repeating elements should be kept in a different set. Hence the maximum no subsites that we require is the frequency of the maximum time occurring element.

Ex -> { 1 , 2 , 1 , 2 , 3 , 3 , 2 , 2 }
here
Frequency of 1 -> 2
Frequency of 2 -> 4
Frequency of 3 -> 2

Since the frequency of 2 is maximum hence we need to have at least 4 subset to keep all the 2 in different subsets and rest of element can be occupied accordingly. */

function miniNumOfSubset(arr) {
  let map1 = new Map();
  let most_frequent = 0;

  for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
      map1.set(arr[i], map1.get(arr[i]) + 1);

      let temp = map1.get(arr[i]);
      most_frequent = temp > most_frequent ? temp : most_frequent;
    } else {
      map1.set(arr[i], 1);
    }
  }

  return most_frequent === 0
    ? `Minimun 1 subset can be formed out of given array.`
    : `Minimum ${most_frequent} subsets can be formed out of given array .`;
}

const arr1 = [1, 2, 3, 4, 2, 2];

console.log(miniNumOfSubset(arr1));

// Time complexity --> O(n)
// Space compllexity --> O(n)
