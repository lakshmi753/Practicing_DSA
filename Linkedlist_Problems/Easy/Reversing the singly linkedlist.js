function appendNode(head, tail, value) {
  let newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    head = newNode;
    return { head: head, tail: newNode };
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
  if (head === null) return "Empty LinkedList";

  let curNode = head;

  while (curNode !== null) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 1));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 2));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 3));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 4));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 5));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 6));

printList(head1);

let head2 = null;
let tail2 = null;

({ head: head2, tail: tail2 } = prependNode(head2, tail2, 1));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 2));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 3));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 4));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 5));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 6));

printList(head2);

// Time complexity --> O(n)
// Space complexity --> O(1)
