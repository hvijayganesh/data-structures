const BinarySearchTree = require('../../../../data-structures/tree/BinarySearchTree'),
    BinaryTreeNode = require('../../../../data-structures/tree/BinaryTreeNode'),
    maxPathSum = require('../max-path-sum'),
    expect = require('chai').expect;


describe('Max Path Sum', () => {
  it('Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.', () => {
    let tree = new BinarySearchTree(); 

    tree.root = new BinaryTreeNode(10);
    tree.root.left = new BinaryTreeNode(2); 
    tree.root.right = new BinaryTreeNode(10); 
    tree.root.left.left = new BinaryTreeNode(20); 
    tree.root.left.right = new BinaryTreeNode(1); 
    tree.root.right.right =  new BinaryTreeNode(-25);
    tree.root.right.right.left = new BinaryTreeNode(3); 
    tree.root.right.right.right = new BinaryTreeNode(4); 

    let tree2 = new BinarySearchTree();
    tree2.root = new BinaryTreeNode(1);
    tree2.root.left = new BinaryTreeNode(2); 
    tree2.root.right = new BinaryTreeNode(3);

    let tree3 = new BinarySearchTree();
    tree3.root = new BinaryTreeNode(-10);
    tree3.root.left = new BinaryTreeNode(9); 
    tree3.root.right = new BinaryTreeNode(20);
    tree3.root.right.left =  new BinaryTreeNode(15);
    tree3.root.right.right =  new BinaryTreeNode(7);

    let tree4 = new BinarySearchTree();
    tree4.root = new BinaryTreeNode(-3);
    
    let tree5 = new BinarySearchTree();
    tree5.root = new BinaryTreeNode(-2);
    tree5.root.left = new BinaryTreeNode(-1);

    let tree6 = new BinarySearchTree();
    tree6.root = new BinaryTreeNode(1);
    tree6.root.left = new BinaryTreeNode(2); 
    tree6.root.left.left = new BinaryTreeNode(3); 
    tree6.root.left.left.left = new BinaryTreeNode(4); 
    tree6.root.left.left.left.left = new BinaryTreeNode(5); 
    

    // let result = maxPathSum(tree.root);
    // let result2 = maxPathSum(tree2.root);
    // let result3 = maxPathSum(tree3.root);
    // let result4 = maxPathSum(tree4.root);
    let result5 =  maxPathSum(tree6.root);

    // expect(result).to.eql(42);
    // expect(result2).to.eql(6);
    // expect(result3).to.eql(42);
    // expect(result4).to.eql(-3);
    expect(result5).to.eql(-1);
  });
});
