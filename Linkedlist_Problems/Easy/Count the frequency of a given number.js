/* Q: Given a singly linked list and a key, count the number of occurrences of the given key in the linked list. 
For example, if the given linked list is 1->2->1->2->1->3->1 and the given key is 1, then the output should be 4.*/

// 1..........................................

/*function appendNode(head, tail, value) {
  let newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    head = newNode;
    return { head: newNode, tail: newNode };
  } else {
    tail.next = newNode;
    return { head: head, tail: newNode };
  }
}

function countNum(head, num) {
  let curNude = head;
  let count = 0;

  while (curNude !== null) {
    if (curNude.value === num) {
      count++;
    }
    curNude = curNude.next;
  }

  return count;
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 20));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 40));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 60));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 70));

const num = 10;

console.log(countNum(head1, num));*/

// Time complexity --> O(n)
// Space complexity --> O(1)

// 2.............................................................
// using Recursion................

function appendNode(head, tail, value) {
  let newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    head = newNode;
    return { head: newNode, tail: newNode };
  } else {
    tail.next = newNode;
    return { head: head, tail: newNode };
  }
}

let count = 0;

function countNum(head, num) {
  if (head === null) {
    return count;
  }

  if (head.value === num) {
    count++;
  }

  return countNum(head.next, num);
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 20));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 40));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 60));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 70));

const num = 10;

console.log(countNum(head1, num));

/* Time complexity: O(n) where n is size of linked list
   Auxiliary Space: O(n) for call stack since using recursion */
