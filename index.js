import "./doublyLinkedList";
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     var current = this.head;
//     var newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined;
//     const shifted = this.head;
//     this.head = this.head.next;
//     this.length--;
//     if (this.length === 0) this.tail = null;
//     return shifted;
//   }
//   unshift(val) {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let counter = 0;
//     let target = this.head;
//     while (counter < index) {
//       target = target.next;
//       counter++;
//     }
//     return target;
//   }
//   set(index, value) {
//     let target = this.get(index);
//     if (!target) return false;
//     target.val = value;
//     return true;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return this.unshift(val) && true;
//     if (index === this.length) return this.push(val) && true;
//     const newNode = new Node(val);
//     newNode.next = this.get(index);
//     this.get(index - 1).next = newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return false;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     const target = this.get(index);
//     this.get(index - 1).next = this.get(index + 1);
//     this.length--;
//     return target;
//   }
//   reverse() {
//     let node = this.head;
//     [this.head, this.tail] = [this.tail, this.head];
//     let prev = null;
//     let next;

//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }

// var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");
