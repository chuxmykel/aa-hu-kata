const assert = require('assert').strict;
const { add, subtract } = require('../');

describe('add', () => {
    it('Should add two numbers correctly.', () => {
        assert.strictEqual(add(2, 7), 9);
    });
});

describe('subtract', () => {
    it('Should subtract two numbers correctly.', () => {
        assert.strictEqual(subtract(9, 7), 2);
    });
});
