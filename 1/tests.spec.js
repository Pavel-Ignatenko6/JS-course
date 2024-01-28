import { describe, expect, test } from "@jest/globals";

import {
  findSmallestAndBiggest,
  isPalindrome,
  selectUniqueValues,
  truncateString,
} from "./tasks";

describe('"truncateString" function should return correct string value', () => {
  test('"truncateString" function should return correct string value', () => {
    expect(truncateString("Hello World!")).toBe("Hello W...");
    expect(truncateString("Hello")).toBe("Hello");
    expect(truncateString("")).toBe("");
    expect(truncateString(" ")).toBe(" ");
    expect(truncateString("Hello w")).toBe("Hello w");
  });
});

describe('"selectUniqueValues" function should return correct array of unique values', () => {
  test('"selectUniqueValues" function should return correct array of unique values', () => {
    expect(selectUniqueValues([])).toEqual([]);
    expect(selectUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(selectUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
    expect(selectUniqueValues([1, 2, 3, 1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(selectUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});

describe('"findSmallestAndBiggest" function should return correct array of 2 numbers - the smallest and largest values', () => {
  test('"findSmallestAndBiggest" function should return correct array of 2 numbers - the smallest and largest values', () => {
    expect(findSmallestAndBiggest([])).toEqual([undefined, undefined]);
    expect(findSmallestAndBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 9]);
    expect(findSmallestAndBiggest([1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1, 1]);
    expect(findSmallestAndBiggest([1, 2, 3, 1, 2, 3, 1, 2, 3])).toEqual([1, 3]);
    expect(findSmallestAndBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 9]);
    expect(findSmallestAndBiggest([8, 2, 3, 4, 5, 6, 7, 1])).toEqual([1, 8]);
  });
});

describe('"isPalindrome" function should correctly check the receiving string for a palindrome', () => {
  test('"isPalindrome" function should return true for palindromes', () => {
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("We panic in a pew")).toBe(true);
  });

  test('"isPolindrom" function should return false for non-palindromes', () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("Hello world!")).toBe(false);
  });
});
