class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  add(data) {
    const node = this.rootNode; // create a variable of the root note on the tree
    if (node === null) {
      // if the root node is null then set the root note to data
      this.rootNode = new Node(data);
      //addVisualNode(data);
      return;
    } else {
      // if not first node recursive function to traverse the data until we find where it needs to go
      const traverseTree = function (node) {
        // recurisve function to find place in tree
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            //addVisualChildNode(data, node);
            return;
          } else if (node.left !== null) {
            return traverseTree(node.left); //
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            //addVisualChildNode(data, node);
            return;
          } else if (node.right !== null) {
            return traverseTree(node.right);
          }
        } else {
          return null;
        }
      };
      return traverseTree(node);
    }
  }

  findMinVal() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMaxVal() {
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findVal(data) {
    // find a value in the tree
    let current = this.rootNode;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  nodeIsInTree(data) {
    // see if a value is presetn in the tree return a boolean
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  removeFromTree(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }
}
