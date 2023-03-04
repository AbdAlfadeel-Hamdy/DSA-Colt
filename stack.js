class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const popped = this.first;
    if (this.size === 1) {
      this.first = this.last = null;
    } else {
      this.first = popped.next;
      popped.next = null;
    }
    this.size--;
    return popped.val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else this.last = this.last.next = newNode;
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    const removed = this.first;
    if (this.size === 1) this.first = this.last = null;
    else this.first = this.first.next;
    this.size--;
    return removed.val;
  }
}
