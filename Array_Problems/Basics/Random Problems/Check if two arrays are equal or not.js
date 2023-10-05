const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 4, 5];

const checkTwoEqualArrays = function (arr1, arr2) {
  // if(arr1.length !== arr2.length){   // apply this condition if we want the arrays to be of same length
  //     return false;                  // and and having the same elements with no element in repetetion.
  // }
  //The initial check takes constant time, O(1).
  // to compare the lengths of the two arrays.

  const a1 = arr1.toString().split(",").join("");
  const a2 = arr2.toString().split(",").join("");
  console.log(a1, a2);
  //This part involves converting the arrays to strings using toString(), and then splitting and joining them using split(',') and join('').
  //Converting an array to a string using toString() is a linear operation that takes O(n) time, where n is the number of elements in the array.
  //Splitting and joining the strings also take linear time as they involve iterating through the elements of the string.
  // Therefore, these operations collectively take O(n) time for each array, resulting in a total of O(n) time for this part.

  for (let el of a1) {
    if (a2.indexOf(el) === -1) {
      // return el;// here we can also get the missing "number" .
      return false;
    }
  }
  //The for...of loop iterates through each element of a2, which is a string.
  // Since a2 is a string representation of the elements of arr2, the loop will execute n times, where n is the number of elements in arr2.
  //In each iteration, it performs an indexOf operation on a1, which is another string.
  //The indexOf operation takes O(m) time, where m is the number of characters in a1.
  // Since the for...of loop iterates n times, and in each iteration, it performs an indexOf operation that takes O(m) time,
  // the total time complexity for this loop is O(n * m).

  return true;
};

console.log(checkTwoEqualArrays(array1, array2));

// Time complexity ---> Putting it all together,
//the overall time complexity of the code is O(n + n * m) == O(n + n^2) ----> O(n^2)
//where n is the number of elements in the arrays arr1 and arr2,
//and m is the average number of characters in each element of arr1.

//Note: In practice, if the arrays have the same elements but in different orders,
//the worst-case scenario for the indexOf operation would be O(n) (when the arrays are equal and there is a match at the end).
//In the best case (when there is a match at the beginning), it would be O(1).
// However, the average-case time complexity can be approximated as O(m).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A look at "time complexity" step-by-step..............................

// 1. Converting the arrays to strings using toString():
//This operation has a linear time complexity of O(n),
// where n is the number of elements in the arrays.

// 2. Splitting and joining the strings using split(',') and join(''):
// These operations also have linear time complexity of O(m),
// where m is the total number of characters in the string representation of the arrays.

// 3. The for...of loop: This loop iterates through the characters in one of the strings, which has m characters.
// Each iteration involves an "indexOf" operation on the other string, which has a time complexity of O(m) as well.
// Since these are nested operations  it becomes O(n) * O(n). ("for of loop" * "indexOf function").

// ---> Since all the operations in the code have linear time complexities of O(n) or O(m),
//the overall time complexity of the code is O(n) + O(n) *  O(n) = O(n + n^2) == O(n^2).
// However, in Big O notation, we drop the constants, so the final time complexity of the code is O(n + m).

// ---> In this case, the time complexity is determined by the number of elements in the arrays (n)
// and the total number of characters in the string representations of the arrays (m).
//As the sizes of the arrays grow, the time taken by the algorithm will grow linearly with the number of elements and the number of characters in the arrays.
