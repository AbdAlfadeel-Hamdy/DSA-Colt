class BinaryHeaps {
  constructor() {
    this.values = [];
  }
  insert(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex === -1) return;
    while (node.priority < this.values[parentIndex].priority) {
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  }
  extractMin() {
    const extractedMin = this.values[0];
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    this.values.pop();

    let parentIndex = 0;
    while (2 * parentIndex + 1 <= this.values.length - 1) {
      const leftChild = this.values[2 * parentIndex + 1];
      const rightChild = this.values[2 * parentIndex + 2];
      let smallerChildIndex;
      if (!rightChild) smallerChildIndex = 2 * parentIndex + 1;
      else
        smallerChildIndex =
          leftChild.priority > rightChild.priority
            ? 2 * parentIndex + 2
            : 2 * parentIndex + 1;

      if (
        this.values[parentIndex].priority >
        this.values[smallerChildIndex].priority
      ) {
        [this.values[parentIndex], this.values[smallerChildIndex]] = [
          this.values[smallerChildIndex],
          this.values[parentIndex],
        ];
        parentIndex = smallerChildIndex;
      } else break;
    }
    return extractedMin;
  }
}

const bh1 = new BinaryHeaps();

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
bh1.insert("gonz", 0);
bh1.insert("adham", 1);
bh1.insert("hoss", 4);
bh1.insert("rais", 2);
bh1.insert("toto", 3);
bh1.insert("zb", 7);
bh1.insert("mama", 1);
bh1.insert("dad", 0);
