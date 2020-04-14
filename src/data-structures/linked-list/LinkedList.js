const LinkedListNode = require('./LinkedListNode');
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(data) {
    this.size += 1;
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    return this;
  }

  append(data) {
    this.size += 1;
    const newNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  includes(data) {
    if (!this.head) return false;
    let isNode = data.constructor.name === 'LinkedListNode';
    if (isNode) data = data.data;
    let currentNode = this.head;
    while (currentNode) {
      if (data !== undefined && data === currentNode.data) {
        return true;
      };
      currentNode = currentNode.next;
    };
    return false;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  toArray(useNodes = false) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(useNodes ? currentNode : currentNode.data);
      currentNode = currentNode.next;
    };
    return nodes;
  }
}
module.exports = LinkedList