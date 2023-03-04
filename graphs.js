class Graphs {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
  }
  removeVertex(v) {
    for (const vertex of this.adjacencyList[v]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }
  DFSRecursive(vertex) {
    const endResult = [];
    const visitedVertices = {};
    const helper = (vertex) => {
      if (!vertex) return;
      visitedVertices[vertex] = true;
      endResult.push(vertex);
      for (const v of this.adjacencyList[vertex])
        if (!visitedVertices[v]) helper(v);
    };
    helper(vertex);
    return endResult;
  }
  DFSIterative(vertex) {
    const endResult = [];
    const visitedVertices = {};
    const stack = [];
    stack.push(vertex);
    visitedVertices[vertex] = true;
    while (stack.length > 0) {
      const vertex = stack.pop();
      endResult.push(vertex);
      for (const v of this.adjacencyList[vertex]) {
        if (!visitedVertices[v]) {
          visitedVertices[v] = true;
          stack.push(v);
        }
      }
    }
    return endResult;
  }
  BFS(vertex) {
    const queue = [vertex];
    const endResult = [];
    const visitedVertices = {};
    visitedVertices[vertex] = true;
    while (queue.length) {
      const vertex = queue.shift();
      endResult.push(vertex);
      this.adjacencyList[vertex].forEach((v) => {
        if (!visitedVertices[v]) {
          visitedVertices[v] = true;
          queue.push(v);
        }
      });
    }
    return endResult;
  }
}
const g = new Graphs();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
