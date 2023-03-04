class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (this.length === 0) return undefined;
    const shifted = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = shifted.next;
      shifted.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shifted;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let current;
    if (index < middle) {
      let counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    }
    if (index >= middle) {
      let counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val) && true;
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    prevNode.next.prev = newNode;
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

const dll = new DoublyLinkedList();
console.log(dll.push(3));
console.log(dll.push(4));
console.log(dll.push(5));
console.log(dll.push(6));
console.log(dll.push(7));
