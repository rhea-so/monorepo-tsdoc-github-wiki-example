/**
 * Adds two numbers.
 * @param x The first number.
 * @param y The second number.
 * @returns The sum of the two numbers.
 * @example
 * ```typescript
 * // Return 2:
 * add(1, 1);
 * ```
 * @example
 * ```typescript
 * // Return 4:
 * add(3, 1);
 * ```
 */
export function add(x: number, y: number): number {
  return x + y;
}

/**
 * Adds two number with a class.
 * @class Adder
 */
export class Adder {
  /**
   * Creates an instance of Adder.
   * @param x The first number.
   */
  constructor(public readonly x: number) {}

  /**
   * Adds the number to the instance number.
   * @param y The second number.
   * @returns The sum of the two numbers.
   * @example
   * ```typescript
   * // Return 2:
   * new Adder(1).add(1);
   * ```
   */
  public add(y: number): number {
    return this.x + y;
  }
}
