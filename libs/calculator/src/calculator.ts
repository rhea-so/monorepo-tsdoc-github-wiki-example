/** Calculator class for basic arithmetic operations. */
export class Calculator {
  /** The current value of the calculator. */
  public value: number;

  /**
   * Creates a new calculator.
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
  constructor(
    /** The initial value of the calculator. */
    value: number = 0
  ) {
    this.value = value;
  }

  /**
   * Adds a number to the calculator.  \
   * {@link @libs/arithmetic!Addition~add} is used to add the number.
   * @param x The number to add.
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
   * Subtracts a number from the calculator.  \
   * {@link @libs/arithmetic!Subtraction~sub} is used to subtract the number.
   * @param x The number to subtract.
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
   * Multiplies the calculator by a number.  \
   * {@link @libs/arithmetic!Multiplication~mul} is used to multiply the calculator.
   * @param x The number to multiply by.
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
   * Divides the calculator by a number.  \
   * {@link @libs/arithmetic!Division~div} is used to divide the calculator.
   * @param x The number to divide by.
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

  /**
   * Tests the calculator.
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.test({ value: 1 });
   * ```
   */
  public test(
    /** The input for the test. */
    input: TestInput
  ): void {
    // Do nothing
  }
}

/** The input for {@link Calculator~test}. */
export interface TestInput {
  /** The value to test. */
  value: number;
}
