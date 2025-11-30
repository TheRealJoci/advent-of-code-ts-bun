export function isIterable<T = unknown>(obj: unknown): obj is Iterable<T> {
  return (
    obj != null &&
    typeof obj === 'object' &&
    typeof (obj as Record<symbol, unknown>)[Symbol.iterator] === 'function'
  );
}
