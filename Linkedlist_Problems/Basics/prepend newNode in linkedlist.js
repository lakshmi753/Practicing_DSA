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

function prependNode(list, value) {
  let newNode = createNewNode(value);

  newNode.next = list.head;

  return {
    head: newNode,
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
myList = prependNode(myList, 20);
myList = prependNode(myList, 30);
myList = prependNode(myList, 40);
myList = prependNode(myList, 50);
myList = prependNode(myList, 60);

printList(myList);

// Time complexity ---> O(n)
// Space complexity ---> O(1)
