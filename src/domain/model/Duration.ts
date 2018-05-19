export class Duration {
  constructor(public numerator: number, public denominator: number) {}

  public value(): number {
    return this.numerator / this.denominator;
  }
}

export const predefinedDurations = new Map<symbol, Duration>([
  [Symbol.for("unit duration"), new Duration(1, 1)],
  [Symbol.for("1/2 duration"), new Duration(1, 2)],
  [Symbol.for("1/4 duration"), new Duration(1, 4)],
  [Symbol.for("1/8 duration"), new Duration(1, 8)],
  [Symbol.for("1/16 duration"), new Duration(1, 16)],
  [Symbol.for("1/32 duration"), new Duration(1, 32)],
]);
