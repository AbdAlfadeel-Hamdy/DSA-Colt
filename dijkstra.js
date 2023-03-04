class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  shortestPath(startVertex, endVertex) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};

    for (const v in this.adjacencyList) {
      if (v === startVertex) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
      previous[v] = null;
    }
    let smallest;
    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (v === endVertex) return;
      for (const val of this.adjacencyList[v]) {
        const distance = 1;
      }
    }
  }
}

const x = new PriorityQueue();
x.enqueue("jdhhd", 8);
console.log(x);

const obj = {
  age: 23,
  name: "gonz",
};

for (const k in obj) {
  console.log(k);
}
