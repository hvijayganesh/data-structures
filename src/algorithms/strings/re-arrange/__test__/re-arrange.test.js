const reArrange = require('../re-arrange'),
    expect = require('chai').expect;


describe('Re Arrange string', () => {
  it.only('Re Arrange string ', () => {
    
    let res = reArrange('AAABBCCFFFFD');

    expect(res).to.eql('FACFABFCDABF');
  });
});
