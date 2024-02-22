/**
 * Write an implementation of the 'sumNumber' function
 * that will add two numbers.
 *
 * @param num1 {number} First number
 * @param num2 {number} Second number
 * @returns {number}
 */
export function sumNumber(num1, num2) {
  // your implementation here

  // multiply nums by 1 billion then add nums, then divide by 1 billion
  return (num1 * 1e9 + num2 * 1e9) / 1e9;
}

/**
 * check if array contains numeric value
 *
 * @param arr {Array} Array of numbers
 * @returns {boolean}
 */

export function isNumericArray(arr) {
  // your implementation here

  if (arr.length === 0) {
    return true;
  }

  const values = arr.every(
    (value) => typeof value === "number" && isFinite(value)
  );
  return values;
}

/**
 * Write an implementation of the 'multiplyArrNumbers' function
 * which returns a new array with the multiplied values of the array elements
 * if they are not greater than the maxNumber passed to the array.
 *
 * @param arr {Array} Array of numbers
 * @param maxNumber {number} Maximum number
 * @returns {Array}
 */
export function multiplyArrNumbers(arr, maxNumber) {
  // your implementation here

  const squared = arr
    .filter((i) => i <= maxNumber)
    .map((value) => Math.pow(value, 2));
  // We have it like this, otherwise it will be 'undefined'
  return squared;
}

/**
 * Write an implementation of the 'getSumOfNumbers' function
 * which returns the sum of all numbers in the array
 * if they are not greater than the maxNumber passed to the array.
 *
 * @param arr {Array} Array of numbers
 * @param maxNumber {number} Maximum number
 * @returns {number}
 */
export function getSumOfNumbers(arr, maxNumber) {
  // your implementation here

  let sum = 0;

  if (arr.length === 0) {
    return 0;
  }

  arr.filter((i) => i <= maxNumber).map((value) => (sum += value));
  return sum;
}

/**
 * Write an implementation of the 'sumOfOddNumbers' function
 * which returns the sum of all odd numbers in the array
 */

export function sumOfOddNumbers(arr) {
  // your implementation here
  let sumOfOddNums = 0;

  if (arr.length === 0) {
    return 0;
  }

  arr.filter((i) => i % 2 > 0).map((value) => (sumOfOddNums += value));

  return parseFloat(sumOfOddNums);
}

/**
 * Write an implementation of the 'getSumOddAndEvenNumbers' function
 * which returns a sum of all odd and even numbers in the array
 * in the following format: { odd: 123, even: 123 }
 * (using reduce method)
 */
export function getSumOddAndEvenNumbers(arr) {
  // your implementation here

  return arr.reduce(
    (acc, el) => {
      console.log(acc);
      //  check if the element is an even number
      if (el % 2 === 0) {
        // copy acc and then change its property
        return { ...acc, even: acc.even + el };
      } else {
        return { ...acc, odd: acc.odd + el };
      }
    },
    {
      odd: 0,
      even: 0,
    }
  );
}

console.log(getSumOddAndEvenNumbers([1, 2, 3, 4]));
