'use strict'; 
const _ = require('lodash');

/**
 * @param {LinkedList} linkedList
 * @param {Integer}    k
 */
const sortByChunkSum = (linkedList, k) => {
  let currentNode = linkedList.head;
  let sumToChunkMap = {};

  while (currentNode) {
    let startNode = currentNode;
    let endNode;
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      sum += currentNode.data;

      if (i == k) {
        endNode = currentNode
      }
      currentNode = currentNode.next;
    }
    sumToChunkMap[sum] = {
      start: startNode,
      end: endNode
    };
  }

  let ordered = [], size = 0;
    
  _(sumToChunkMap).keys().sort().each((key) => {
    ordered.push(sumToChunkMap[key]);
    size += 1;
  });

  for (let i = 0; i < size; i++) {
    if ( i == 0 ) {
      _fixTailNode(ordered[i], linkedList);
    } else {
      _insertChunkAtStart(ordered[i], linkedList);
    }
  }
}

const _fixTailNode = (nodeObj, linkedList) => {
  linkedList.head = nodeObj.start;
  nodeObj.end.next = null;
  linkedList.tail = nodeObj.end;
}

const _insertChunkAtStart = (nodeObj, linkedList) => {
  nodeObj.end.next = linkedList.head;
  linkedList.head = nodeObj.start;
}

module.exports = {
  sortByChunkSum
}