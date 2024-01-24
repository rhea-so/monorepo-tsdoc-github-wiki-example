import { Calculator } from "../calculator";

/**
 * A factory for creating calculators.
 * @class CalculatorFactory
 */
export class CalculatorFactory {
  /**
   * Creates a new calculator.
   * @param value The initial value of the calculator.
   * @returns A new calculator.
   * @public
   * @static
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
  public static create(value: number = 0): Calculator {
    return new Calculator(value);
  }
}
