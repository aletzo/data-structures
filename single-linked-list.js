class Node {
    
    constructor(value) {
        this.next  = null;
        this.value = value;
    }
    
}

class SingleLinkedList {

    constructor() {
        this.head   = null;
        this.length = 0;
    }

    add(node) {
        let head = this.head;

        if (head) {
            while (head.next) {
                head = head.next;
            }

            head.next = node;
        } else {
            this.head = node;
        }

        this.length++;

        return this;
    }

    getNodeAtPosition(position) {
        let node = null;

        this.traverse().forEach((n, i) => {
            if (node !== null) {
                return;
            }

            if (i === position) {
                node = n;
            }
        });

        return node;
    }

    getPositionOfNode(node) {
        let position = null;

        this.traverse().forEach((n, i) => {
            if (position !== null) {
                return;
            }

            if (node.value === n.value) {
                position = i;
            }
        });

        return position;
    }

    print(nodes) {
        nodes.forEach((node, i) => {
            console.log(`${i}: ${node.value}`);
        });
    }

    remove(node) {
    }

    removeAtPosition(position) {
    }

    traverse(reverse = false) {
        let node = this.head;

        let i = 0;

        let nodes = [];

        while (i < this.length) {
            if (reverse) {
                nodes.unshift(node);
            } else {
                nodes.push(node);
            }

            node = node.next;

            i++;
        }

        return nodes;
    }

    traverseReverse() {
        return this.traverse(true);
    }


}


const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const list = new SingleLinkedList();

list.add(nodeA)
    .add(nodeB)
    .add(nodeC)
    .add(nodeD)
    .add(nodeE);

list.print(list.traverse());

list.print(list.traverseReverse());


console.log(list.getPositionOfNode(nodeB));
console.log(list.getNodeAtPosition(3));


