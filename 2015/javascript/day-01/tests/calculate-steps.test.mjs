import assert from 'assert';
import { calculate_num_of_floors, calculate_position } from "../calculate-steps.mjs";

describe('Calculate number of floors traveled', () => {

    it('Correctly calculates 3 floors', () => {
        const string = "(((";
        const answer = calculate_num_of_floors(string);
        assert.equal(answer, 3);
    })

    it('Correctly calculates 10 floors', () => {
        const string = "((((())()(((()(())((((";
        const answer = calculate_num_of_floors(string);
        assert.equal(answer, 10);
    })

    it('Correctly calculates 21 floors', () => {
        const string = "((((())()(((()(())((((((((())()(((()(())(((((";
        const answer = calculate_num_of_floors(string);
        assert.equal(answer, 21);
    })

    it('Correctly calculates ignores whitespace', () => {
        const string = "((((())()(((()(())((((((((())()(((()(())((((( ";
        const answer = calculate_num_of_floors(string);
        assert.equal(answer, 21);
    })
})

describe('Calculates the first postion that takes us to the basement `-1`', () => {

    it('the first position leads to the basement', () => {
        const string = '())';
        const answer = calculate_position(string);
        assert.equal(answer, 2);
    })

    it('The 10th move takes us to the basement', () => {
        const string = '(()))';
        const answer = calculate_position(string);
        assert.equal(answer, 4);
    })
})

