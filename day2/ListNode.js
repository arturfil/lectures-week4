class ListNode {
  constructor(val, next = null) {
    this.next = next;
    this.val = val;
  }
}

// linked list => a set of ListNodes
// creating nodes
const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(9);

// linking nodes
head.next = node1;
node1.next = node2;
node2.next = node3;

// print linked list function
const printLinkedList = (headNode) => {
  let current = headNode
  while(current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// printLinkedList(head);

// Add a new node in order
const node4 = new ListNode(5);
node4.next = node3;
node2.next = node4;

printLinkedList(head);
console.log('\n');
//                delete this
//                    |
//                    v
// head -> node1 -> node2 -> node4 -> node3
// After Deletion
// head -> node1 -> node4 -> node3
// Deleting the node with value 3

node1.next = node4;
node2.next = null;

printLinkedList(head);
