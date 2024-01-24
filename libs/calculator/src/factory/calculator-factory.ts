import { Calculator } from "../calculator";

/** A factory for creating calculators. */
export class CalculatorFactory {
  /**
   * Creates a new calculator.
   * @example
   * ```typescript
   * const calc = CalculatorFactory.create();
   * console.log(calc.value); // 0
   * ```
   * @example
   * ```typescript
   * const calc = CalculatorFactory.create(1);
   * console.log(calc.value); // 1
   * ```
   */
  public static create(
    /** The initial value of the calculator. */
    value: number = 0
  ): Calculator {
    return new Calculator(value);
  }
}
