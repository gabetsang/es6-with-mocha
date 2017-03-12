import assert from 'assert';
import path from '../path';
describe('Test retrieve a value according to a path in a data structure contains nested object ', function() {
	describe('Error handling', function() {
	  
	    it('should return undefined when the path is not present', function() {
	      assert.equal(path()(), undefined);
	    });
	  
	    it('should return undefined when the data is not present', function() {
	      assert.equal(path(['pet'])(), undefined);
	    });

	});


	describe('test given case', function() {
	  const data = {
	            name: 'Mary',
	            pet: {
	                        name: 'Ringo',
	                        kid: {
	                                    name: 'Tia',
	                                    owner: {
	                                                name: 'Tim'
	                                    }
	                        }
	            }
	  } 
	    it('should return Tie when the args are [‘pet’, ‘kid’, ’name’]', function() {
	      assert.equal(path(['pet', 'kid', 'name'])(data), 'Tia');
	    });
	     it('should return Object {name: "Tim"} when the args are [‘pet’, ‘kid’, ’owner’]', function() {
	      assert.deepEqual(path(['pet', 'kid', 'owner'])(data), {name: 'Tim'});
	    });
	      it('should return undefined when the args are [‘pet’, ‘owner’]', function() {
	      assert.equal(path(['pet', 'owner'])(data),  undefined);
	    });
	  
	});
});