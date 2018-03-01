declare module "bignumber.js" {
  declare type $npm$bignumber$object = number | string | BigNumber;
  declare type $npm$cmp$result = -1 | 0 | 1;
  declare type DIGIT = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  declare type ROUND_UP = 0;
  declare type ROUND_DOWN = 1;
  declare type ROUND_CEIL = 2;
  declare type ROUND_FLOOR = 3;
  declare type ROUND_HALF_UP = 4;
  declare type ROUND_HALF_DOWN = 5;
  declare type ROUND_HALF_EVEN = 6;
  declare type ROUND_HALF_CEIL = 7;
  declare type ROUND_HALF_FLOOR = 8;
  declare type RM = ROUND_UP | ROUND_DOWN | ROUND_CEIL | ROUND_FLOOR | ROUND_HALF_UP | ROUND_HALF_DOWN | ROUND_HALF_EVEN | ROUND_HALF_CEIL | ROUND_HALF_FLOOR;
  declare type FORMAT = {
    decimalSeparator: string,
    groupSeparator: string,
    groupSize: number,
    secondaryGroupSize: number,
    fractionGroupSeparator: string,
    fractionGroupSize: number,
  }
  declare type CONFIG = {
    DECIMAL_PLACES: number,
    ROUNDING_MODE: RM,
    EXPONENTIAL_AT: number | [number];
    RANGE: number | [number],
    CRYPTO: boolean,
    MODULO_MODE: DIGIT,
    POW_PRECISION: number,
    FORMAT: FORMAT,
    ALPHABET: string,
  }

  declare class BigNumber {
    // Properties
    static DP: number;
    static RM: RM;
    static E_NEG: number;
    static E_POS: number;

    c: ?Array<DIGIT>;
    e: ?number;
    s: -1 | 1 | null;

    // Constructors
    static (value: $npm$bignumber$object, base?: number): BigNumber;
    constructor(value: $npm$bignumber$object, base?: number): BigNumber;

    config(c: CONFIG): CONFIG;
    clone(c: CONFIG): BigNumber;
    isBigNumber(n: any): boolean;
    max([$npm$bignumber$object]): BigNumber;
    min([$npm$bignumber$object]): BigNumber;
    random(n: number): BigNumber;

    // Methods
    abs(): BigNumber;
    comparedTo(n: $npm$bignumber$object, base?: number): $npm$cmp$result;
    dp(dp?: number, rm?: number): BigNumber | number;
    div(n: $npm$bignumber$object): BigNumber;
    eq(n: $npm$bignumber$object): boolean;
    gt(n: $npm$bignumber$object): boolean;
    gte(n: $npm$bignumber$object): boolean;
    lt(n: $npm$bignumber$object): boolean;
    lte(n: $npm$bignumber$object): boolean;
    minus(n: $npm$bignumber$object): BigNumber;
    mod(n: $npm$bignumber$object): BigNumber;
    plus(n: $npm$bignumber$object): BigNumber;
    pow(exp: number): BigNumber;
    round(dp: ?number, rm: ?RM): BigNumber;
    sqrt(): BigNumber;
    times(n: $npm$bignumber$object): BigNumber;
    toExponential(dp: ?number): string;
    toFixed(dp: ?number): string;
    toFormat(dp?: number, rm?: RM): string;
    toPrecision(sd: ?number): string;
    toString(): string;
    valueOf(): string;
    toJSON(): string;
  }

  declare module.exports: typeof BigNumber;
}
