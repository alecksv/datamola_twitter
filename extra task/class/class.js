class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class ListNode {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
  addNode(value, i) {
    let newList = new List(value);
  }
  removeNode(i) {}
}
