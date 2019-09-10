
import chai, { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import jsdom from 'jsdom';

const should = chai.should();; 
const { JSDOM } = jsdom;



describe('Basic DOM Detection', () => {
    it('should find text "Hello World', (done) => {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        const p = dom.window.document.querySelector("p");
        expect(p.textContent).to.equal("Hello world")
      done();
    });
});

describe('a generated element appended to the DOM ', () => {
    it('should find text "Hello World', (done) => {
        const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`);

        // Create New Elements
        const newDiv = dom.window.document.createElement('div');
        const newHeading = dom.window.document.createElement('h1');
        newHeading.innerText = "Look mom, I made a new heading!";

        // Arrange new node tree using dom
        newDiv.appendChild(newHeading);
        dom.window.document.querySelector('#root').appendChild(newDiv);

        // test that new node exists on dom
        should.exist(dom.window.document.querySelector('h1'))
      done();
    });
});