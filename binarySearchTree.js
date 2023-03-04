class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (true) {
        if (newNode.value === current.value) return false;
        if (newNode.value > current.value) {
          if (current.right) {
            current = current.right;
            continue;
          }
          current.right = newNode;
          break;
        } else {
          if (current.left) {
            current = current.left;
            continue;
          }
          current.left = newNode;
          break;
        }
      }
    }
    return this;
  }
  contains(value) {
    if (!this.root) return false;
    if (this.root.value === value) return true;
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) return true;
        if (value > current.value) {
          if (current.right) {
            current = current.right;
            continue;
          }
          return false;
        } else {
          if (current.left) {
            current = current.left;
            continue;
          }
          return false;
        }
      }
    }
  }
  BFS() {
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      const node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  PreOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  PostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }
  InOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
}

const newTree = new BST();
newTree.insert(10);
newTree.insert(6);
newTree.insert(15);
newTree.insert(3);
newTree.insert(8);
newTree.insert(20);

console.log(newTree.PreOrder());
console.log(newTree.PostOrder());
console.log(newTree.InOrder());
