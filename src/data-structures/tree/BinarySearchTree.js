'use strict';
const BinaryTreeNode = require('./BinaryTreeNode');
const _ = require('lodash');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    this.root = this.insertRec(this.root, data);
  }

  insertRec(node, data) {
    if (_.isNil(node)) {
      this.root = new BinaryTreeNode(data);
      return this.root;
    }
    if (node.data == data) {
      return node;
    }
    /* Otherwise, recur down the tree */
    if (data < node.data) {
      node.left = this.insertRec(node.left, data);
    } else {
      node.right = this.insertRec(node.right, data);
    }
    return node;
  }

  preOrderTraversal() {
    let traversalList = []
    this.preOrderTraversalRec(this.root, traversalList);
    return traversalList;
  }

  preOrderTraversalRec(node, traversal) {
    if (_.isNil(node)) {
      return;
    }
    traversal.push(node.data);
    this.preOrderTraversalRec(node.left, traversal);
    this.preOrderTraversalRec(node.right, traversal);
  } 
}

module.exports = BinaryTree;