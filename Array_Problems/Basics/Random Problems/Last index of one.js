const num = '00101010010010100'; //'0000000010000' ;
const myString = "today is a nice day"; 

const lastIndex = function(n){

  const lastIndexOfString = n.lastIndexOf('1');

  return lastIndexOfString;

}

console.log(lastIndex(num));
// console.log(lastIndex(myString));

// Time complexity ---> O(n).


// Description ..................................

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

// The lastIndexOf() method searches the string from the end to the beginning.

// The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() method is case sensitive.

// The second argument of the "lastIndexxOf function" takes the "position"  we want the function to search the "element" nearby.