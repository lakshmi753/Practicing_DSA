/* Q: Given a singly linked list, we have to convert it into circular linked list. For example, we have been given a singly linked list with four nodes and we want to convert this singly linked list into circular linked list. */

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

function converToCircular(head) {
  if (head === null) return "Empty Linkedlist";

  let curNode = head;

  while (curNode.next !== null) {
    curNode = curNode.next;
  }

  curNode.next = head;
}

function printList(head) {
  if (head === null) return "Empty Linkedlist";

  let curNode = head;

  do {
    console.log(curNode.value);
    curNode = curNode.next;
  } while (curNode !== head);
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = append(head1, tail1, 10));
({ head: head1, tail: tail1 } = append(head1, tail1, 20));
({ head: head1, tail: tail1 } = append(head1, tail1, 30));
({ head: head1, tail: tail1 } = append(head1, tail1, 40));
({ head: head1, tail: tail1 } = append(head1, tail1, 50));
({ head: head1, tail: tail1 } = append(head1, tail1, 60));
({ head: head1, tail: tail1 } = append(head1, tail1, 70));

converToCircular(head1);
printList(head1);

// Time complexity --> O(n)
// Space complexity --> O(1)
