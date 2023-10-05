const array = [1, 2, 3, 4, 5, 6];

const rotate = function (arr) {
  const removedElement = arr.pop();
  arr.unshift(removedElement);

  return arr;
};

console.log(array);
console.log(rotate(array));

// Time complexity of "pop()" ---> O(1)
// Time complexity of "unshift()" ---> O(n)
// therefore Time complexity of program ---> O(n).......
