function createNewNode(value, next = null) {
  return { value, next };
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
  const newNode = createNewNode(value);

  list.tail.next = newNode;
  return {
    head: list.head,
    tail: newNode,
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

printList(myList);

// Time complexity ---> O(n)
// Space complexity ---> O(1)
