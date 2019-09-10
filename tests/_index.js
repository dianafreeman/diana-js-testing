/* Testing Starter 
*
*
*
* You can uncomment the line below for a cleaner import of the SHOULD method */

//import 'chai/register-should';

import chai, { expect, assert } from 'chai';
import { describe, it } from 'mocha';

// "should" can't be exported the same way as "expect", so we do it in a gross and bulky way.
const should = chai.should(); 


describe('CHECK TESTING AND ASSERTION CONFIGURATION', () => {
  describe('will test against EXPECTation of evaluation to be true', () => {
    it('will pass if EXPECT configuration is correct', (done) => {
      const NUMBERS = [1, 2, 3, 4, 5];
      expect(NUMBERS).to.be.a('array').that.includes(4);
      expect(NUMBERS).to.have.lengthOf(5);
      done();
    });
  });
  describe('will test against a definition what method SHOULD do', () => {
    it('will pass if SHOULD configuration is correct', (done) => {
      const NUMBERS = [1, 2, 3, 4, 5];
      NUMBERS.should.be.a('array').that.includes(4);
      NUMBERS.should.have.lengthOf(5);
      done();
    });
  });
  describe('will test against ASSERTion of what should be true ', () => {
    it('will pass if ASSERT configuration is correct', (done) => {
      const NUMBERS = [1, 2, 3, 4, 5];
      assert.typeOf(NUMBERS, 'array')
      assert.lengthOf(NUMBERS, 5)
      done();
    });
  });
});