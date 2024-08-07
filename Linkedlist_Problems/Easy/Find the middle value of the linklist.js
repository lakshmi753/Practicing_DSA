/* Q: Given a Singly Linked List, the task is to find the middle of the linked list. If the number of nodes are even, then there would be two middle nodes, so return the second middle node.

Example:

Input: linked list = 1 -> 2 -> 3 -> 4 -> 5
Output: 3 
Explanation: There are 5 nodes in the linked list and there is one middle node whose value is 3.

Input: linked list = 1 -> 2 -> 3 -> 4 -> 5 -> 6
Output: 4 
Explanation: There are 6 nodes in the linked list, so we have two middle nodes: 3 and 4, but we will return the second middle node which is 4.*/

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

function prependNode(head, tail, value) {
  let newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    head = newNode;
    return { head: newNode, tail: newNode };
  } else {
    newNode.next = head;
    return { head: newNode, tail: tail };
  }
}

function printList(head) {
  let linkList = [];
  let curNode = head;

  while (curNode !== null) {
    linkList.push(curNode.value);
    curNode = curNode.next;
  }

  console.log(linkList);

  let len = linkList.length;
  let mid;

  if (len % 2 === 0) {
    mid = Math.floor(len / 2);

    return `Middle of the linklist is ${linkList[mid - 1]} and ${
      linkList[mid]
    }`;
  } else {
    mid = Math.floor(len / 2);
    return `Middle of linklist is ${linkList[mid]}`;
  }
}

/*let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 1));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 2));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 3));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 4));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 5));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 6));

console.log(printList(head1));

let head2 = null;
let tail2 = null;

({ head: head2, tail: tail2 } = prependNode(head2, tail2, 1));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 2));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 3));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 4));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 5));

console.log(printList(head2));*/

// Time complexity --> O(n)
// Space complexity --> O(n)

// Counting nodes(one pass) approach..........................

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

function midValue(head) {
  let curNode = head;
  let count = 1;
  let midNode = head;

  while (curNode !== null) {
    if (count % 2 === 0) {
      midNode = midNode.next;
    }

    curNode = curNode.next;
    count++;
  }

  return midNode;
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 20));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 30));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 40));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 50));
//({ head: head1, tail: tail1 } = appendNode(head1, tail1, 60));

console.log(midValue(head1));

// Time complexity --> O(n)
// Space complexity --> O(n)
