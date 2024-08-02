/* Q: Given a matrix of distinct values and a sum. The task is to find all the pairs in a given matrix whose summation is equal to the given sum. Each element of a pair must be from different rows i.e; the pair must not lie in the same row.

Examples:  

Input : mat[4][4] = {{1, 3, 2, 4},
                     {5, 8, 7, 6},
                     {9, 10, 13, 11},
                     {12, 0, 14, 15}}
        sum = 11
Output: (1, 10), (3, 8), (2, 9), (4, 7), (11, 0)  */

function findpairsOfSum(mat, n, sum) {
  let map1 = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map1.set(mat[i][j], [i, j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let complement = sum - mat[i][j];

      if (map1.has(complement)) {
        let p = map1.get(complement);
        let row = p[0];
        let col = p[1];

        if (row !== i && row > i) {
          console.log(`(${mat[i][j]}, ${mat[row][col]})`);
        }
      }
    }
  }
}

const mat = [
  [1, 3, 2, 4],
  [5, 8, 7, 6],
  [9, 10, 13, 11],
  [12, 0, 14, 15],
];

const n = mat.length;
const sum = 11;

findpairsOfSum(mat, n, sum);

// Time complexity --> O(n^2)
// Space complexity --> O(n^2)
