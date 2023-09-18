class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const rootNode = this.root;
    if (rootNode === null) {
      this.root = new Node(data);
    } else {
      function searchTree(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      searchTree(rootNode);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  // find
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.left;
      }
      if (current === null) {
        return null;
      }
    }
    return current.data;
  }

  //isPresent
  isPresent(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.left;
      }
      if (current === null) {
        return false;
      }
    }
    return true;
  }

  // remove
  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        if (node.right === null && node.left === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(8);
binarySearchTree.add(3);
binarySearchTree.add(10);
binarySearchTree.add(1);
binarySearchTree.add(6);
binarySearchTree.add(4);
binarySearchTree.add(7);
binarySearchTree.add(10);
binarySearchTree.add(14);
binarySearchTree.add(13);
binarySearchTree.remove(14);
binarySearchTree.remove(13);
console.log(binarySearchTree.findMax(), ' is max');
console.log(binarySearchTree.findMin(), ' is min');
console.log(binarySearchTree.find(8), ' is find 8');
console.log(binarySearchTree.isPresent(8), ' is isPresent 8')