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
 * Subtracts two numbers.
 * @param x The first number.
 * @param y The second number.
 * @returns The difference of the two numbers.
 * @example
 * ```typescript
 * // Return 0:
 * sub(1, 1);
 * ```
 * @example
 * ```typescript
 * // Return 2:
 * sub(3, 1);
 * ```
 * @example
 * ```typescript
 * // Return -2:
 * sub(1, 3);
 * ```
 */
export function sub(x: number, y: number): number {
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param x The first number.
 * @param y The second number.
 * @returns The product of the two numbers.
 * @example
 * ```typescript
 * // Return 1:
 * mul(1, 1);
 * ```
 * @example
 * ```typescript
 * // Return 3:
 * mul(3, 1);
 * ```
 * @example
 * ```typescript
 * // Return -3:
 * mul(1, -3);
 * ```
 */
export function mul(x: number, y: number): number {
  return x * y;
}

/**
 * Divides two numbers.
 * @param x The first number.
 * @param y The second number.
 * @returns The quotient of the two numbers.
 * @example
 * ```typescript
 * // Return 1:
 * div(1, 1);
 * ```
 * @example
 * ```typescript
 * // Return 3:
 * div(3, 1);
 * ```
 * @example
 * ```typescript
 * // Return -0.3333333333333333:
 * div(1, -3);
 * ```
 */
export function div(x: number, y: number): number {
  return x / y;
}
