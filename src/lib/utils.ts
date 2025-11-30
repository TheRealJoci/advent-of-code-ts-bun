/**
 * Binary search for the index of a value in a sorted array.
 * @param array - The sorted array to search in.
 * @param value - The value to search for.
 * @returns The index of the value in the array.
 */
export function binarySearch(array: number[], value: number): number {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (array[mid]! < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

/**
 * Insert a value into a sorted array.
 * @param array - The sorted array to insert into.
 * @param value - The value to insert.
 * @returns The array with the value inserted.
 */
export function insertSorted(array: number[], value: number): number[] {
  const target = binarySearch(array, value);
  array.splice(target, 0, value);

  return array;
}
