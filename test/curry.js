import assert from 'assert';
import cuAdd from '../curry';


describe('Test cuAdd function', function() {
  
    it('should return 6 when there are 1,2,3 in the argument', function() {
      assert.equal(cuAdd(1, 2, 3), 6)
    })


    it('should return 6 when there is 1 in the first call and 1,2 in the second call', function() {
      assert.equal(cuAdd(1)(2, 3), 6)
    })

    it('should return 6 when there are 1,2 in the first call and 3 in the second call', function() {
      assert.equal(cuAdd(1, 2)(3), 6)
    })

    it('should return 6 when there are 1,2 and 3 in the 3 calls', function() {
      assert.equal(cuAdd(1)(2)(3), 6)
    })
})

 