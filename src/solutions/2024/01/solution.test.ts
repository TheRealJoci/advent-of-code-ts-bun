import { describe, test, expect } from 'bun:test';
import { solutions } from './solution';

const examples = [
  {
    input: `3   4
  4   3
  2   5
  1   3
  3   9
  3   3`,
    result: 11,
  },
  {
    input: `3   4
4   3
2   5
1   3
3   9
3   3`,
    result: 31,
  },
];

describe('Year 2024, Day 1', () => {
  examples.forEach(({ input, result }, i) => {
    const solution = solutions[i];

    if (typeof solution !== 'function') {
      throw new Error(`Solution ${i.toString()} is not a function`);
    }

    test(`Solution ${i.toString()}`, () => {
      expect(solution(input)).toBe(result);
    });
  });
});
