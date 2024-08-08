function createNewNode(value) {
  return { value: value, next: null };
}

function createLinkedList(value) {
  const head = createNewNode(value);

  return {
    head,
    tail: head,
    length: 1,
  };
}

function appendNode(list, value) {
  let newNode = createNewNode(value);

  list.tail.next = newNode;

  return {
    head: list.head,
    tail: newNode,
    length: list.length + 1,
  };
}

function traverseToIndex(list, index) {
  let counter = 0;
  let curNode = list.head;

  while (counter !== index) {
    curNode = curNode.next;
    counter++;
  }

  return curNode;
}

function insertNode(list, index, value) {
  if (index > list.length) {
    appendNode(value);
  }

  const newNode = createNewNode(value);
  const leader = traverseToIndex(list, index - 1);

  const holdingPtr = leader.next;
  leader.next = newNode;
  newNode.next = holdingPtr;

  return {
    head: list.head,
    tail: list.tail,
    length: list.length + 1,
  };
}

function printList(list) {
  let curNode = list.head;

  while (curNode !== null) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
}

let myList = createLinkedList(10);
myList = appendNode(myList, 20);
myList = appendNode(myList, 30);
myList = appendNode(myList, 40);
myList = appendNode(myList, 50);
myList = appendNode(myList, 60);
myList = appendNode(myList, 70);

insertNode(myList, 1, 100);

printList(myList);

// Time complexity ---> O(n)
// Space complexity ---> O(1)
