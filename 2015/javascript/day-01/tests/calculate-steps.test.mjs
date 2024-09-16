import assert from 'assert';
import { calculate_num_of_floors } from "../calculate-steps.mjs";

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

