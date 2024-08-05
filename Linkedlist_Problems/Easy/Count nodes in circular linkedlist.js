function newNode(value) {
  let node = {
    value: value,
    next: null,
  };

  return node;
}

function countNode(head) {
  if (head === null) return "Empty Linkedlist";

  let curNode = head;
  let count = 0;

  do {
    count++;
    curNode = curNode.next;
  } while (curNode !== head);

  return `${count} nodes`;
}

let head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);
head.next.next.next = newNode(4);
head.next.next.next.next = newNode(5);

head.next.next.next.next.next = head;

//console.log(countNode(head));

////////////////////////////////////////////////////////////////////

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

function countNodes(head) {
  if (head === null) return `Empty Linkedlist`;

  let curNode = head;
  let count = 0;

  do {
    count++;
    curNode = curNode.next;
  } while (curNode !== head);

  return `${count} nodes`;
}

let head1 = null;
let tail1 = null;

// Inserting values to Linkedlist...............
({ head: head1, tail: tail1 } = append(head1, tail1, 1));
({ head: head1, tail: tail1 } = append(head1, tail1, 2));
({ head: head1, tail: tail1 } = append(head1, tail1, 3));
({ head: head1, tail: tail1 } = append(head1, tail1, 4));
//({ head: head1, tail: tail1 } = append(head1, tail1, 5));

// Making Linkedlist circular.......................
head1.next.next.next.next = head1;

console.log(countNodes(head1));

// Time complexity --> O(n)
// Space complexityv--> O(1);
