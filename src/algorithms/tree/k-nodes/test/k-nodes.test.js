const BinarySearchTree = require('../../../../data-structures/tree/BinarySearchTree'),
    BinaryTreeNode = require('../../../../data-structures/tree/BinaryTreeNode'),
    printNodesAtKDistance = require('../k-nodes'),
    expect = require('chai').expect;


describe('Print nodes at k distance', () => {
  it.only('print all the nodes that are at distance k from the given target node', () => {
    let tree = new BinarySearchTree(); 

    tree.root = new BinaryTreeNode(20);
    tree.root.left = new BinaryTreeNode(8); 
    tree.root.right = new BinaryTreeNode(22); 
    tree.root.left.left = new BinaryTreeNode(4); 
    tree.root.left.right = new BinaryTreeNode(12); 
    tree.root.left.right.left = new BinaryTreeNode(10); 
    tree.root.left.right.right = new BinaryTreeNode(14); 
    let target = tree.root.left;
    
    //let preOrderTraversal = tree.preOrderTraversal();
    let result = printNodesAtKDistance(tree.root, target, 2);

    expect(result).to.eql([10, 14, 22]);
  });
});
