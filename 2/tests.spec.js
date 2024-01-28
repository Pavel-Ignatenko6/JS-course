import { describe, expect, test } from '@jest/globals';

import {
  getSumOddAndEvenNumbers,
  getSumOfNumbers,
  isNumericArray,
  multiplyArrNumbers,
  sumNumber,
  sumOfOddNumbers
} from './tasks.js';

describe('"sumNumber" should return correct sum of numbers', () => {
  test('"sumNumber" should return correct sum of numbers', () => {
    expect(sumNumber(1, 2)).toBe(3);
    expect(sumNumber(1, 1)).toBe(2);
    expect(sumNumber(0, 0)).toBe(0);
    expect(sumNumber(-1, 1)).toBe(0);
    expect(sumNumber(-1, -1)).toBe(-2);
    expect(sumNumber(0.5, 0.7)).toBeCloseTo(1.2);
    expect(sumNumber(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sumNumber(0.28, 0.14)).toBeCloseTo(0.42);
  });
});

describe('"isNumericArray" should return true if array contains only numbers', () => {
  test('"isNumericArray" should return true if array contains only numbers', () => {
    expect(isNumericArray([])).toBe(true);
    expect(isNumericArray([1, 2, 0.3, 4, 5, 6, 7, 8, 9])).toBe(true);
    expect(isNumericArray([1, '1', 1, 1, 1])).toBe(false);
    expect(isNumericArray([1, 2, undefined])).toBe(false);
    expect(isNumericArray([1, 2, null])).toBe(false);
    expect(isNumericArray([1, 2, Infinity])).toBe(false);
    expect(isNumericArray([8, 2, NaN])).toBe(false);
  });
});

describe('"multiplyArrNumbers" should return new array with the multiplied values of the array elements if they are not greater than the maxNumber passed to the array', () => {
  test('"multiplyArrNumbers" should return new array with the multiplied values of the array elements if they are not greater than the maxNumber passed to the array', () => {
    expect(multiplyArrNumbers([], 1)).toEqual([]);
    expect(multiplyArrNumbers([1, 2, 3, 4], 2)).toEqual([
      1, 4
    ]);
    expect(multiplyArrNumbers([1, 2, 3, 4], 4)).toEqual([
      1, 4, 9, 16
    ]);
    expect(multiplyArrNumbers([1, 1, 1, 1, 1], 1)).toEqual([1, 1, 1, 1, 1]);
    expect(multiplyArrNumbers([1, 2, 3, 5], 6)).toEqual([1, 4, 9, 25]);
    expect(multiplyArrNumbers([1, 2, 3, 4, 5, 6, 7], 5)).toEqual([
      1, 4, 9, 16, 25
    ]);
  });
});

describe('"getSumOfNumbers" should return the sum of all numbers in the array if they are not greater than the maxNumber passed to the array', () => {
  test('"getSumOfNumbers" should return the sum of all numbers in the array if they are not greater than the maxNumber passed to the array', () => {
    expect(getSumOfNumbers([], 1)).toBe(0);
    expect(getSumOfNumbers([], 0)).toBe(0);
    expect(getSumOfNumbers([0], 1)).toBe(0);
    expect(getSumOfNumbers([1, 2, 3, 4], 2)).toBe(3);
    expect(getSumOfNumbers([1, 2, 3, 4], 4)).toBe(10);
    expect(getSumOfNumbers([1, 1, 1, 1, 1], 1)).toBe(5);
    expect(getSumOfNumbers([1, 2, 3, 5], 6)).toBe(11);
    expect(getSumOfNumbers([1, 2, 3, 4, 5, 6, 7], 5)).toBe(15);
  });
});

describe('"sumOfOddNumbers" should return the sum of all odd numbers in the array', () => {
  test('"sumOfOddNumbers" should return the sum of all odd numbers in the array', () => {
    expect(sumOfOddNumbers([])).toBe(0);
    expect(sumOfOddNumbers([2, 4])).toBe(0);
    expect(sumOfOddNumbers([1])).toBe(1);
    expect(sumOfOddNumbers([1, 2, 3, 4])).toBe(4);
    expect(sumOfOddNumbers([1, 2, 3, 4, 5])).toBe(9);
  });
});

describe('"getSumOddAndEvenNumbers" should return the sum of all odd and even numbers in the array', () => {
  test('"getSumOddAndEvenNumbers" should return the sum of all odd and even numbers in the array', () => {
    expect(getSumOddAndEvenNumbers([])).toEqual({
      odd: 0,
      even: 0
    });
    expect(getSumOddAndEvenNumbers([2, 4])).toEqual({
      odd: 0,
      even: 6
    });
    expect(getSumOddAndEvenNumbers([1])).toEqual({
      odd: 1,
      even: 0
    });
    expect(getSumOddAndEvenNumbers([1, 2, 3, 4])).toEqual({
      odd: 4,
      even: 6
    });
    expect(getSumOddAndEvenNumbers([1, 2, 3, 4, 5])).toEqual({
      odd: 9,
      even: 6
    });
  });
});
