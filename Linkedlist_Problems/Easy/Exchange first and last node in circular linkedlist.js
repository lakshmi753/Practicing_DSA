/* Q: Given Circular linked list exchange the first and the last node. The task should be done with only one extra node, you can not declare more than one extra node, and also you are not allowed to declare any other temporary variable. */

function append(head, tail, value) {
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

/*function makingListCircular(head) {
  if (head === null) return "Empty linkedList";

  let curNode = head;

  while (curNode.next !== null) {
    curNode = curNode.next;
  }

  curNode.next = head;
}*/

function swappingNodes(head) {
  if (head === null) return "Empty LinkedList";

  let lastNode = head;

  while (lastNode.next !== head) {
    lastNode = lastNode.next;
  }

  let temp = lastNode.value;
  lastNode.value = head.value;
  head.value = temp;

  printList(head);
}

function printList(head) {
  if (head === null) return "Empty LinkedList";

  let curNode = head;

  do {
    console.log(curNode.value);
    curNode = curNode.next;
  } while (curNode !== head);
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = append(head1, tail1, 1));
({ head: head1, tail: tail1 } = append(head1, tail1, 2));
({ head: head1, tail: tail1 } = append(head1, tail1, 3));
({ head: head1, tail: tail1 } = append(head1, tail1, 4));
({ head: head1, tail: tail1 } = append(head1, tail1, 5));
({ head: head1, tail: tail1 } = append(head1, tail1, 6));
({ head: head1, tail: tail1 } = append(head1, tail1, 7));

console.log(head1, tail1);

tail1.next = head1;

console.log(head1, tail1);

printList(head1);
console.log(" ");
swappingNodes(head1);

// Time Complexity --> O(n)
// Space complexity --> O(1);
