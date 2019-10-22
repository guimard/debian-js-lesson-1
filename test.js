var assert = require('assert');
var module = require('.');
describe('Simple', function() {
  it('should return 1', function() {
    assert.equal(module.result,1);
  });
});
