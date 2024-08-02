/* Q: Given a singly linked list, find if the linked list is circular or not.

--> The idea is to store head of the linked list and traverse it. If iterator reaches NULL, linked list is not circular. else If it reaches head again, then linked list is circular. 

Follow the given steps to solve the problem:

Declare a Node pointer node and initialize it to the head’s next
Move node pointer to the next node, while the node is not equal to nullptr and node is not equal to the head
After coming out of the loop, check if the node is equal to head then return true, else return false*/

class newNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function newNod(value) {
  let temp = new newNode(value);
  return temp;
}

function isCircular(head) {
  if (head === null) return `Yes1`;

  let curNode = head.next;

  while (curNode !== null && curNode !== head) {
    curNode = curNode.next;
  }

  if (curNode === head) {
    return `Yes2`;
  } else {
    return `No`;
  }
}

let head1 = null;
//console.log(isCircular(head1));

let head = newNod(1);
head.next = newNod(2);
head.next.next = newNod(3);
head.next.next.next = newNod(4);

//console.log(isCircular(head));

//Making the list circular.............................
head.next.next.next.next = head;

console.log(isCircular(head));

// Time complexity --> O(n)
// Space complexity --> O(1)
