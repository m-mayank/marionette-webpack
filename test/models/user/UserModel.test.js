import UserModel from '../../../src/models/user/UserModel';

describe('User Model test case', function() {
  before(function () {
	  this.model = new UserModel();
  });
  
  describe('#instance of', function() {
    it('should return true', function() {
    		assert.equal(this.model instanceof UserModel, true);
    });
  });
  
  after(function () {
	  this.model = null;
  });
});