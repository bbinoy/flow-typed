// @flow

import BigNumber from "bignumber.js";

// Properties
(BigNumber.DP: number);
(BigNumber.RM: number);
// $ExpectError
(BigNumber.DP: string);
// $ExpectError
(BigNumber.RM: string);
BigNumber.RM = 0;
BigNumber.RM = 1;
BigNumber.RM = 2;
BigNumber.RM = 3;
// $ExpectError
BigNumber.RM = 4;
// $ExpectError
BigNumber.RM = -1;

// Constructors
(new BigNumber(1): BigNumber);
(new BigNumber('1'): BigNumber);
(new BigNumber(new BigNumber(5)): BigNumber);

(BigNumber(1): BigNumber);
(BigNumber('1'): BigNumber);
(BigNumber(BigNumber(5)): BigNumber);

// $ExpectError
(new BigNumber({}): BigNumber);
// $ExpectError
(new BigNumber([]): BigNumber);
// $ExpectError
(BigNumber({}): BigNumber);
// $ExpectError
(BigNumber([]): BigNumber);
// $ExpectError
BigNumber()
// $ExpectError
BigNumber().nope;

// Methods
let b: BigNumber = BigNumber('2');

(b.abs(): BigNumber);
(b.cmp(b): number);
(b.div(b): BigNumber);
(b.eq(b): boolean);
(b.gt(b): boolean);
(b.gte(b): boolean);
(b.lt(b): boolean);
(b.lte(b): boolean);
(b.minus(b): BigNumber);
(b.mod(b): BigNumber);
(b.plus(b): BigNumber);
(b.pow(2): BigNumber);
(b.round(): BigNumber);
(b.round(1): BigNumber);
(b.round(1, 2): BigNumber);
// $ExpectError
(b.round(1, 4): BigNumber);
(b.sqrt(): BigNumber);
(b.times(b): BigNumber);
(b.toExponential(): string);
(b.toExponential(7): string);
(b.toFixed(): string);
(b.toFixed(7): string);
(b.toPrecision(): string);
(b.toPrecision(): string);
(b.toPrecision(7): string);
(b.toString(): string);
(b.valueOf(): string);
(b.toJSON(): string);

// Properties
(b.c.length + 2);
// $ExpectError
b.c + 2;
(b.e: number);
(b.s: number);
// $ExpectError
(b.s: string);
