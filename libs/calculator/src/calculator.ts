/**
 * Calculator class for basic arithmetic operations.
 * @class Calculator
 */
export class Calculator {
  /**
   * The current value of the calculator.
   * @property value
   * @type number
   * @public
   * @default 0
   * @example
   * ```typescript
   * const calc = new Calculator();
   * console.log(calc.value); // 0
   * ```
   */
  public value: number;

  /**
   * Creates a new calculator.
   * @param value The initial value of the calculator.
   * @constructor
   * @example
   * ```typescript
   * const calc = new Calculator();
   * console.log(calc.value); // 0
   * ```
   * @example
   * ```typescript
   * const calc = new Calculator(1);
   * console.log(calc.value); // 1
   * ```
   */
  constructor(value: number = 0) {
    this.value = value;
  }

  /**
   * Adds a number to the calculator.
   * @param x The number to add.
   * @method add
   * @public
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.add(1);
   * console.log(calc.value); // 1
   * ```
   */
  public add(x: number): void {
    this.value += x;
  }

  /**
   * Subtracts a number from the calculator.
   * @param x The number to subtract.
   * @method sub
   * @public
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.sub(1);
   * console.log(calc.value); // -1
   * ```
   */
  public sub(x: number): void {
    this.value -= x;
  }

  /**
   * Multiplies the calculator by a number.
   * @param x The number to multiply by.
   * @method mul
   * @public
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.mul(2);
   * console.log(calc.value); // 0
   * ```
   * @example
   * ```typescript
   * const calc = new Calculator(1);
   * calc.mul(2);
   * console.log(calc.value); // 2
   * ```
   */
  public mul(x: number): void {
    this.value *= x;
  }

  /**
   * Divides the calculator by a number.
   * @param x The number to divide by.
   * @method div
   * @public
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.div(2);
   * console.log(calc.value); // 0
   * ```
   * @example
   * ```typescript
   * const calc = new Calculator(1);
   * calc.div(2);
   * console.log(calc.value); // 0.5
   * ```
   */
  public div(x: number): void {
    this.value /= x;
  }
}
