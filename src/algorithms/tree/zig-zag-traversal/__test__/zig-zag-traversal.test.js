const BinarySearchTree = require('../../../../data-structures/tree/BinarySearchTree'),
    zigZagTraversal = require('../zig-zag-traversal');
    expect = require('chai').expect;


describe('Zig zag traversal', () => {
  it('Print the elements of a tree in zig zag manner ', () => {
    let tree = new BinarySearchTree(); 
          
    /* Let us create following BST 
          50 
        /     \ 
      30      70 
      /  \    /  \ 
    20   40  60   80 */
    tree.insert(50); 
    tree.insert(30); 
    tree.insert(20); 
    tree.insert(40); 
    tree.insert(70); 
    tree.insert(60); 
    tree.insert(80);
    
    //let preOrderTraversal = tree.preOrderTraversal();
    let zigZagTraversalList = zigZagTraversal(tree.root); 

    expect(zigZagTraversalList).to.eql([50, 70, 30, 20, 40, 60, 80]);
  });
});
