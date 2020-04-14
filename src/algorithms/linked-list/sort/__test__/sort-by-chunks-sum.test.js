const LinkedList = require('../../../../data-structures/linked-list/LinkedList'),
    sortByChunkSum = require('../sort-by-chunk-sum').sortByChunkSum,
    expect = require('chai').expect;


describe('custom sort', () => {
  it('should sort linked list by chunks sum in desc order', () => {
    const linkedList = new LinkedList();

    linkedList.fromArray([1, 3, 0, 5, 1, 7, 0, 2, 4, 3]);

    sortByChunkSum(linkedList, 2);

    expect(linkedList.toArray()).to.eql([1, 7, 4, 3, 0, 5, 1, 3, 0, 2]);
  });
});
