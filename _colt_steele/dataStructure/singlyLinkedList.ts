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

//A data structure that contains head, tail and a length , consist of a node, and each node has a value
// and a pointer to another node or null
class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null; /* pointer to head */
    this.tail = null; /* pointer to tail */
    this.length = 0; /* length */
  }

  push(val: any) {
    let newNode = new NodeX(val);
    console.log(newNode)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this
  }
}

const obj = new SinglyLinkedList();
obj.push('hello');
obj.push('hi');
console.log(obj.head.next);
