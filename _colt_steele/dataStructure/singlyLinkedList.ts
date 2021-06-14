class NodeX {
  val: string;
  next: any;
  constructor(val) {
    this.val = val;
    this.next = null
  }
}
const firstNode = new NodeX('hello');
firstNode.next = new NodeX('there');
console.log(firstNode);

class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null; /* pointer to head */
    this.tail = null; /* pointer to tail */
    this.length = 0; /* length */
  }
}
