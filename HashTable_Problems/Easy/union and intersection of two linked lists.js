/* Q:Given two Linked Lists, create union and intersection lists that contain union and intersection of the elements present in the given lists. Order of elements in output lists doesn’t matter. 

Examples:

Input:
   List1: 10 -> 15 -> 4 -> 20
   List2: 8 -> 4 -> 2 -> 10
Output:
   Intersection List: 4 -> 10
   Union List: 2 -> 8 -> 20 -> 4 -> 15 -> 10
Explanation: In this two lists 4 and 10 nodes 
are common. The union lists contains 
all the nodes of both the lists. */

function appendNode(head, tail, value) {
  const newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    return { head: newNode, tail: newNode };
  } else {
    tail.next = newNode;
    return { head: head, tail: newNode };
  }
}

function prependNode(head, tail, value) {
  const newNode = {
    value: value,
    next: null,
  };

  if (head === null) {
    return { head: newNode, tail: newNode };
  } else {
    newNode.next = head;
    return { head: newNode, tail: tail };
  }
}

function listToSet(head) {
  let current = head;

  const resultantSet = new Set();

  while (current !== null) {
    resultantSet.add(current.value);

    current = current.next;
  }

  console.log(resultantSet);
  return resultantSet;
}

function setToList(set) {
  let head = null;
  let tail = null;

  for (let value of set) {
    ({ head, tail } = appendNode(head, tail, value));
  }

  printList(head);
}

function getUnionList() {
  let set1 = listToSet(head1);
  let set2 = listToSet(head2);

  const unionSet = new Set([...set1, ...set2]);

  setToList(unionSet);
}

function getIntersectionList() {
  let set1 = listToSet(head1);
  let set2 = listToSet(head2);

  const interSectionSet = new Set([...set1].filter((value) => set2.has(value)));

  setToList(interSectionSet);
}

function printList(head) {
  const list = [];

  let curNode = head;

  while (curNode !== null) {
    list.push(curNode.value);
    curNode = curNode.next;
  }

  console.log(list);
}

let head1 = null;
let tail1 = null;

({ head: head1, tail: tail1 } = appendNode(head1, tail1, 10));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 15));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 20));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 25));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 30));
({ head: head1, tail: tail1 } = appendNode(head1, tail1, 35));

printList(head1);

let head2 = null;
let tail2 = null;

({ head: head2, tail: tail2 } = prependNode(head2, tail2, 10));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 15));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 20));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 55));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 60));
({ head: head2, tail: tail2 } = prependNode(head2, tail2, 75));

printList(head2);
//listToSet(head1);

//const sett = listToSet(head1);
//setToList(sett);
getUnionList();
getIntersectionList();

/*Summary
--> Time Complexity:

-> appendNode:O(1)
-> listToSet: O(n)
-> setToList: O(m)
-> getIntersection: O(n+m)
-> getUnion: O(n+m)

--> Space Complexity:

-> appendNode: O(1)
-> listToSet: O(n)
-> setToList: O(m)
-> getIntersection: O(n+m)
-> getUnion: O(n+m)
Here, n and m refer to the sizes of the two input linked lists. 

--> Total Time Complexity: O(n+m)
--> Total Space Complexity: O(n+m)*/
