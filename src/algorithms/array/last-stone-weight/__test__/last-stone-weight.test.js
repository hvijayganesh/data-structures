const lastStoneWeight = require('../last-stone-weight'),
    expect = require('chai').expect;


describe.only('Last stone weight', () => {
  it('Last stone weight ', () => {
    
    let res = lastStoneWeight([2,7,4,1,8,1]);

    expect(res).to.eql(1);
  });
});
