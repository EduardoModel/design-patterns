// Example for the Iterator Pattern
const { datatype: fakervalueType } = require('faker');

// To create the nodes for the tree
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// The binary tree
// The code was adapted from https://bit.ly/3fzsmyN
const binaryTree = (function () {
  let root = null;

  function findMinNode(node) {
    if (node.left === null) return node;
    return findMinNode(node.left);
  }

  function insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }

  function removeNode(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = removeNode(node.left, value);
      return node;
    }

    if (value > node.value) {
      node.right = removeNode(node.right, value);
      return node;
    }

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = findMinNode(node.right);
    node.value = aux.value;

    node.right = removeNode(node.right, aux.value);
    return node;
  }

  return {
    add(value) {
      const newNode = new Node(value);
      if (!root) {
        root = newNode;
        return;
      }
      insertNode(root, newNode);
    },
    remove(value) {
      root = removeNode(root, value);
    },
    getRoot() {
      return root;
    },
  };
})();

// In-Order Iterator
function InOrderIterator() {
  this.values = [];

  this.iterate = function (node) {
    if (node != null) {
      this.iterate(node.left);
      this.values.push(node.value);
      this.iterate(node.right);
    }
  };
}

// Pre-Order Iterator
function PreOrderIterator() {
  this.values = [];

  this.iterate = function (node) {
    if (node != null) {
      this.values.push(node.value);
      this.iterate(node.left);
      this.iterate(node.right);
    }
  };
}

// Pos-Order Iterator
function PosOrderIterator() {
  this.values = [];

  this.iterate = function (node) {
    if (node != null) {
      this.iterate(node.left);
      this.iterate(node.right);
      this.values.push(node.value);
    }
  };
}

for (let i = 0; i < 15; i++) {
  binaryTree.add(parseInt(fakervalueType.number() % 50, 10));
}

console.log('\x1b[33m%s\x1b[0m', 'The root of the tree');

console.log(binaryTree.getRoot());

console.log('\x1b[33m%s\x1b[0m', '\nUse the InOrderIterator on the tree');

const inOrderIterator = new InOrderIterator();
inOrderIterator.iterate(binaryTree.getRoot());
console.log(inOrderIterator.values);

console.log('\x1b[33m%s\x1b[0m', '\nUse the PreOrderIterator on the tree');

const preOrderIterator = new PreOrderIterator();
preOrderIterator.iterate(binaryTree.getRoot());
console.log(preOrderIterator.values);

console.log('\x1b[33m%s\x1b[0m', '\nUse the InOrderIterator on the tree');

const posOrderIterator = new PosOrderIterator();
posOrderIterator.iterate(binaryTree.getRoot());
console.log(posOrderIterator.values);
