'use strict'; 
const _ = require('lodash');

const zigZagTraversal = (node) => {
    let level = 0;
    let traversalList = [];
    zigZagTraversalHelper(node, level, traversalList);
    return traversalList
}

const zigZagTraversalHelper = (node, level, traversalList) => {
    let stack1 = [], stack2 = [], temp;
    stack1.push(node);
    while (!_.isEmpty(stack1) || !_.isEmpty(stack2)) {
        if (level % 2 == 0 && !_.isEmpty(stack1)) {
            while (!_.isEmpty(stack1)) {
                temp = stack1.pop();
                traversalList.push(temp.data);
                temp.left ? stack2.push(temp.left) : null;
                temp.left ? stack2.push(temp.right) : null;
            } 
        } else if (!_.isEmpty(stack2)) {
            while (!_.isEmpty(stack2)) {
                temp = stack2.pop();
                traversalList.push(temp.data);
                temp.left ? stack1.push(temp.right) : null;
                temp.right ? stack1.push(temp.left) : null;
            }
        }
    }
}

module.exports = zigZagTraversal;