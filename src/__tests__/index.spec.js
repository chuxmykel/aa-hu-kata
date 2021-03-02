const assert = require('assert').strict;
const { Calculator } = require('../');



describe('Calculator', () => {
 it('Should return zero if the input is empty', () => {
    const calculator = new Calculator();
    assert.strictEqual(calculator.Sum(), 0);
 })

 it('Should return the same number if input is only one number', () => {
     const calculator = new Calculator();
     assert.strictEqual(calculator.Sum('5'), 5);
 });

 it('Should return the sume if input is two numbers', () => {
     const calculator = new Calculator();
     assert.strictEqual(calculator.Sum('5,12'), 17);
 });

 it('Should return the sume if input is any amount of numbers', () => {
     const calculator = new Calculator();
     assert.strictEqual(calculator.Sum('1,2,3,4'), 10);
 });

 it('Should return the sum if input is any amount of umbers delimeted by a newline char or comma', () => {
     const calculator = new Calculator();
     assert.strictEqual(calculator.Sum('4\n4,4,4\n4'), 20);
 })
 
 it('Should return the sum if using a custom delimiter', () => {
     const calculator = new Calculator();
     assert.strictEqual(calculator.Sum('//.\n1.2.3'), 6);
 })

 it('Should throw an exception given a negative number as part of the input', () => {
     const calculator = new Calculator();
     assert.throws(() => calculator.Sum('1,-2'), new Error('negatives not allowed: -2'));
 })
});

/*
1. Given the user input is empty when calculating the sum then it should return zero.
2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers). 
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)
*/