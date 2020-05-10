

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.data = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const _ = require('lodash');

var maxPathSum = function(root) {
    if (!_.isNil(root) && _.isNil(root.left) && _.isNil(root.right)) {
        return root.data;
    }
    let helperResult = maxPathSumHelper(root);
    console.log("helperResult", JSON.stringify(helperResult));
    if (helperResult.subTreeSum > helperResult.pathSum ) {
        return helperResult.subTreeSum;
    } if (helperResult.pathSum > (helperResult.leftSubTreeSum || -99999) && helperResult.pathSum > (helperResult.rightSubTreeSum || -99999)) {
        return helperResult.pathSum
    } else {
        return helperResult.leftSubTreeSum > helperResult.rightSubTreeSum ? helperResult.leftSubTreeSum : helperResult.rightSubTreeSum
    }
};

const maxPathSumHelper = (node) => {
    if (_.isNil(node)) {
        return {
            nodes: 0,
            subTreeSum: 0,
            pathSum: -99999
        }
    }

    let leftSubTree = maxPathSumHelper(node.left);
    let rightSubTree = maxPathSumHelper(node.right);
    let nodes, subTreeSum, pathSum;
    console.log("data", node.data);
    nodes = leftSubTree.nodes + rightSubTree.nodes + 1;
    
    if (leftSubTree.nodes == 1 && rightSubTree.nodes == 1) {
        subTreeSum = node.data + node.left.data + node.right.data;
    }
    
    if (node.data > leftSubTree.pathSum && node.data > rightSubTree.pathSum) {
        pathSum = node.data;
    } else if ((node.data + leftSubTree.pathSum + rightSubTree.pathSum) > (leftSubTree.subTreeSum)
        || (node.data + leftSubTree.pathSum + rightSubTree.pathSum) > (rightSubTree.subTreeSum)) {
        pathSum = node.data + leftSubTree.pathSum + rightSubTree.pathSum;
    } else if ((node.data + leftSubTree.pathSum) > (node.data + rightSubTree.pathSum)) {
        pathSum = node.data + leftSubTree.pathSum > leftSubTree.pathSum ? node.data + leftSubTree.pathSum : leftSubTree.pathSum;
    } else if ((node.data + rightSubTree.pathSum) > (node.data + leftSubTree.pathSum)) {
        pathSum = node.data + rightSubTree.pathSum > rightSubTree.pathSum ? node.data + rightSubTree.pathSum : rightSubTree.pathSum;
    } else if (!_.isNil(node.left) && node.data > leftSubTree.pathSum) {
        pathSum = node.data;
    } else {
        pathSum = node.data;
    }
    
    return {
        nodes: nodes,
        subTreeSum: subTreeSum,
        pathSum: pathSum,
        leftSubTreeSum: leftSubTree.subTreeSum,
        rightSubTreeSum: rightSubTree.subTreeSum
    }
}

module.exports = maxPathSum;