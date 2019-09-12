import React from 'react'
import chai, { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow, render } from 'enzyme';
import Card from '../src/component';

const should = chai.should();
describe('React component rendering', () => {
    it('should not explode', (done) => {
        const wrapper = shallow(<Card />);
        expect(wrapper).to.exist
      done();
    });
});