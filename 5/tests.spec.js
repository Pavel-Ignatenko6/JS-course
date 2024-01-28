import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from '../1/tasks.js';

describe('"isPalindrome" function should correctly check the receiving string for a palindrome', () => {
  test('"isPalindrome" function should return true for palindromes', () => {
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("Level")).toBe(true);
    expect(isPalindrome("We panic in a pew")).toBe(true);
    expect(isPalindrome("Yo, Banana Boy! ")).toBe(true);
    expect(isPalindrome(" Was it a car or a cat I saw?")).toBe(true);
    expect(isPalindrome("Red roses run no risk, sir, on Nurse’s order.")).toBe(true);
  });

  test('"isPolindrom" function should return false for non-palindromes', () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("Hello world!")).toBe(false);
  });
});
