/**
 * Write an implementation of the 'isPalindrome' function without using the reverse and join methods
 * that will check if a string is a palindrome
 * (a word, phrase, or sequence that reads the same backward as forward).
 *
 * @param str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  // your implementation here
  let changedStr = ''
  let backwardsStr = ""
  let specialChars = /[`!@#$%^&*()_\-+=\[\]{};'’:"\\|,.<>\/?~ ]/;


  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !specialChars.test(str[i])) {
      changedStr += str[i];
    }
  }

  for (let i = changedStr.length - 1; i >= 0; i--) {
    backwardsStr += changedStr[i]
  }

  if (changedStr.toLowerCase().trim() === backwardsStr.toLowerCase().trim()) {
    return true;
  }
  return false
}


console.log(isPalindrome("Hello"));
console.log(isPalindrome("Yo, Banana Boy! "));
// console.log(isPalindrome("radar"));