'use strict'; 
const _ = require('lodash');

const printNodesAtKDistance = (tempRoot, node, k) => {
    let result = [];
    printChildNodesAtKDistance(node, k, result, 0);
    printNodesAboveAtKDistance(tempRoot, node, k, 0, result);
    return result;
}

const printNodesAboveAtKDistance = (tempRoot, node, k, level, result) => {
    if (_.isNil(tempRoot)) {
        return 0;
    }
    if (tempRoot.data == node.data) {
        return 1;
    }
    let foundLeftData = printNodesAboveAtKDistance(tempRoot.left, node, k, level + 1, result);
    let foundRightData = printNodesAboveAtKDistance(tempRoot.right, node, k, level + 1, result);

    if (foundRightData) {
        if (k - foundRightData == 0) {
            result.push(tempRoot.data)
            return 0;
        } else {
            printChildNodesAtKDistance(tempRoot.left, (k - foundRightData) - 1, result, 0);
            foundRightData = foundRightData + 1;
            return foundRightData;
        }
    } else if (foundLeftData) {
        if (k - foundLeftData == 0) {
            result.push(tempRoot.data)
            return 0;
        } else {
            printChildNodesAtKDistance(tempRoot.right, (k - foundLeftData) - 1, result, 0);
            foundLeftData = foundLeftData + 1;
            return foundLeftData;
        }
    }
    return 0;
}

const printChildNodesAtKDistance = (node, k, result, level) => {
    if (_.isNil(node)) {
        return;
    }
    if (level == k) {
        result.push(node.data);
        return;
    }
    printChildNodesAtKDistance(node.left, k, result, level + 1);
    printChildNodesAtKDistance(node.right, k, result, level + 1);
}

module.exports = printNodesAtKDistance;