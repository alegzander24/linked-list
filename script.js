class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return node;
	}

	pop() {
		if (!this.head) return null;
		let current = this.head;
		let newTail = this.head;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		newTail.next = null;
		this.tail = newTail;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	shift() {
		if (!this.head) return null;
		const head = this.head;

		this.head = head.next;
		head.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return head;
	}

	unshift(val) {
		const newHead = new Node(val);

		if (!this.head) {
			this.head = newHead;
			this.tail = this.head;
		}
		newHead.next = this.head;
		this.head = newHead;
		this.length++;
		return newHead;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		return current;
	}

	set(idx, val) {
		const node = this.get(idx);
		if (node) {
			node.val = val;
		}
		return node;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return null;
		if (idx === 0) return !!this.unshift(val);
		if (idx === this.length) return !!this.push(val);

		const newNode = new Node(val);

		const nodeBefore = this.get(idx - 1);

		newNode.next = nodeBefore.next;
		nodeBefore.next = newNode;
		return newNode;
	}
	remove(idx) {
		if (idx < 0 || idx >= this.length) return null;
		if (idx === 0) return this.shift();
		if (idx === this.length - 1) return this.pop();
		const nodeBefore = this.get(idx - 1);
		const node = nodeBefore.next;
		const nodeAfter = nodeBefore.next.next;

		nodeBefore.next = nodeAfter;

		node.next = null;

		return node;
	}

	print() {
		let current = this.head;
		const str = [];
		while (current) {
			str.push(`( ${current.val} )`);
			current = current.next;
		}
		console.log(str.join(" =>"));
	}

	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;

		let next;
		let previous = null;
		while (current) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		return this;
	}
	contains(val) {
		let current = this.head;
		while (current) {
			if (current.val.toLowerCase() === val.toLowerCase()) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	find(val) {
		let current = this.head;
		let counter = 0;
		while (current) {
			if (current.val.toLowerCase() === val.toLowerCase()) {
				return counter;
			}
			current = current.next;

			counter++;
		}
		return null;
	}
}

const list = new LinkedList();

list.push("Dark souls");
list.push("Dark souls 2");
list.push("Dark souls 3");
list.unshift("Demon souls");

// list.reverse();

console.log(list.find("demon souls"));
list.print();

console.log(list);
