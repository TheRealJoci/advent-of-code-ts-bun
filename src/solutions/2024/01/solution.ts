import { Counter } from '../../../lib/counter';
import { insertSorted } from '../../../lib/utils';

function solution1(input: string) {
  const [column1, column2] = input.split('\n').reduce<[number[], number[]]>(
    ([first, second], line) => {
      const [a, b] = line.split('   ');

      return [insertSorted(first, Number(a)), insertSorted(second, Number(b))];
    },
    [[], []],
  );

  const result = column1.reduce(
    (acc, value, index) => acc + Math.abs(value - column2[index]!),
    0,
  );

  return result;
}

function solution2(input: string) {
  const [column1, column2] = input
    .split('\n')
    .reduce<[Counter<number>, Counter<number>]>(
      ([first, second], line) => {
        const [a, b] = line.split('   ');

        return [first.update(Number(a)), second.update(Number(b))];
      },
      [new Counter<number>(), new Counter<number>()],
    );

  return Array.from(column1).reduce(
    (acc, [value, count]) => acc + count * value * column2.count(value),
    0,
  );
}

export const solutions = [solution1, solution2];
