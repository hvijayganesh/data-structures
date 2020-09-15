'use strict';
const _ = require('lodash');

const _getCharCountMap = (string) => {
  let charCountMap = {};
  _.each (string, (char) => {
    if ( _.has(charCountMap, char) ) {
      charCountMap[char] = charCountMap[char] + 1;
    } else {
      charCountMap[char] = 1;
    }
  })
  return charCountMap;
}

const _swap = (heap, i, max) => {
  let temp = heap[i];
  heap[i] = heap[max];
  heap[max] = temp;
}

const _heapify = (heap, i, n) => {
  let max = i;

  let leftChild = 2*i + 1;
  let rightChild = 2*i + 2

  if ( leftChild < n && heap[leftChild].count > heap[i].count ) {
    max = leftChild;
  }

  if ( rightChild < n && heap[rightChild].count > heap[i].count ) {
    max = rightChild;
  }

  _swap(heap, i, max);

  if (i != max) {
    _heapify(heap, max, n);
  }

}

const reArrange = (string) => {
  let charCountMap = _getCharCountMap(string);

  let heap = [];
  _.each (charCountMap, (count, char) => {
    heap.push( {count, char} )
  })

  let n = heap.length;
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    _heapify(heap, i, n);
  }

  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let maxElement = heap.shift();
    newString = newString + maxElement.char;
    _heapify(heap, 0, heap.length);
    maxElement.count = maxElement.count - 1;
    heap.push(maxElement);
  }
  return newString;
}

module.exports = reArrange;