import { isIterable } from './types';

/**
 * A counter is a Map-like data structure that counts the number of occurrences of each item in an iterable.
 * @template T - The type of the items in the iterable.
 * @example
 * const counter = new Counter([1, 3, 1]);
 * console.log(counter.count(1)); // 2
 * console.log(counter.count(3)); // 1
 * console.log(counter.count(4)); // 0
 */
export class Counter<T> {
  private map: Map<T, number>;

  constructor(iterable: Iterable<T> | T = []) {
    this.map = new Map();
    this.update(iterable);
  }

  /**
   * Updates the counter with the items in the iterable or a single item.
   * @param value - The iterable to update the counter with.
   * @returns The counter.
   */
  update(value: Iterable<T> | T): this {
    for (const item of this.ensureIterable(value)) {
      this.map.set(item, (this.map.get(item) ?? 0) + 1);
    }

    return this;
  }

  /**
   * Returns the number of occurrences of an item in the counter.
   * @param item - The item to count.
   * @returns The number of occurrences of the item in the counter.
   */
  count(item: T): number {
    return this.map.get(item) ?? 0;
  }

  /**
   * Returns an iterator over the items in the counter.
   * @returns An iterator over the items in the counter.
   */
  [Symbol.iterator]() {
    return this.map[Symbol.iterator]();
  }

  /**
   * Ensures that the possible single item value is converted to an iterable.
   * @param value - The value to ensure is iterable.
   * @returns The value as an iterable.
   */
  private ensureIterable<T>(value: Iterable<T> | T): Iterable<T> {
    if (!isIterable(value)) {
      return [value];
    }

    return value;
  }
}
