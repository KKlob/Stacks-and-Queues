/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let current = this.first;
    const newNode = new Node(val);

    if (!current) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return undefined;
    }

    this.first = newNode;
    newNode.next = current;
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let current = this.first;

    if (!current) throw new Error("Stack is empty");

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return current.val;
    }

    this.first = current.next;
    this.size--;
    return current.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    let current = this.first;
    if (!current) return null;
    return current.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

module.exports = Stack;
