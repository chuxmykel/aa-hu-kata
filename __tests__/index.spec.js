const { add, subtract } = require('../src');

describe('add', () => {
    it('Should add two numbers correctly.', () => {
        expect(add(2, 7)).toEqual(9);
    });
});

describe('subtract', () => {
    it('Should subtract two numbers correctly.', () => {
        expect(subtract(9, 7)).toEqual(2);
    });
});
