/**
 * Write an implementation of the 'truncateString' function
 * that would calculate the length of a string.
 * If the line is longer than 10 characters,
 * it would truncate it and add "..." to the end of the line.
 *
 * @param str
 * @returns {str}
 */

console.log("Tests below v");

export function truncateString(str) {
  if (str.length > 10) {
    str = str.slice(0, 7);
    str = str + "...";
    return str;
  }
  return str;
}

/**
 * Write an implementation of the 'selectUniqueValues' function
 * that would return an array of unique values.
 *
 * @param arr
 * @returns {Array}
 */

export function selectUniqueValues(arr) {
  return [...new Set(arr)];
}

/**
 * Write an implementation of the 'findSmallestAndBiggest' function
 * that would return an array of 2 numbers - the smallest and largest values.
 *
 * @param arr
 * @returns {Array}
 */

export function findSmallestAndBiggest(arr) {
  let min;
  let max;

  if (arr.length) {
    min = Math.min(...arr);
    max = Math.max(...arr);
  }

  return [min, max];
}
console.log(findSmallestAndBiggest([]));

/**
 * Write an implementation of the 'isPalindrome' function
 * that will check if a string is a palindrome
 * (a word, phrase, or sequence that reads the same backward as forward).
 *
 * @param str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  //  make string lowercase and remove spaces, commas
  const lowerCaseString = str
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/!/g, "")
    .replace(/ /g, "");

  // split a string into an array, then reverse it, then join it back to string
  const splitString = lowerCaseString.split("");
  const reversedString = splitString.reverse().join("");

  // Comparison returns boolean by default
  return lowerCaseString === reversedString;
}
