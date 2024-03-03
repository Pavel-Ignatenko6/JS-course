/**
 * Write an implementation of the 'checkMultiple' function
 * that checks:
 * if a number is a multiple of 3 and 2 should return 'multiple of 3 and 2'
 * if a number is a multiple of 3 should return 'multiple of 3'
 * if a number is a multiple of 2 should return 'multiple of 2'
 *
 * IMPORTANT! Don't use if/else statements and ternary operators
 *
 * @param num
 * @returns {string}
 */

export function checkMultiple(num) {
  // your implementation here

  if (num % 2 === 0 && num % 3 === 0) {
    return "multiple of 3 and 2";
  } else if (num % 3 === 0) {
    return "multiple of 3";
  } else if (num % 2 === 0) {
    return "multiple of 2";
  } else {
    console.log("wrong input");
  }
}

/**
 * Write an implementation of the 'copyObject' function
 * that will return a new object with the same values as the original object.
 * The original object should not be changed.
 *
 * IMPORTANT! Don't use the structuredClone function, JSON.stringify/parse method and libraries (e.g., lodash)
 *
 * @param obj
 * @returns {Object}
 */
export function copyObject(obj) {
  // your implementation here
  let resultObj, value, key;

  if (typeof obj !== "object" || obj === null) {
    return obj; // Return the value if obj is not an object
  }

  // Create an array or object to hold the values
  resultObj = Array.isArray(obj) ? [] : {};

  for (key in obj) {
    value = obj[key];

    // Recursively (deep) copy for nested objects, including arrays
    resultObj[key] = copyObject(value);
  }

  return resultObj;
}

console.log(copyObject({
      a: 1,
      b: { c: 2 },
      d: [1, 2, 3],
      e: {
        f: {
          g: "hello",
          h: { i: null },
        },
      },
    }))

/**
 * Write an implementation of the 'findIndex' function that takes a sorted array and a value
 * and returns the index of the value in the array
 * without using methods that iterate over the entire array (e.g., for, forEach).
 * If the value is not found, return -1.
 *
 * @param arr
 * @param value
 */

export function findIndex(arr, value) {
  // your implementation here
  return arr.findIndex((elem) => elem === value);
}

/**
 * Write an implementation of the 'sortArray' function
 * that sorts the array in ascending order
 *
 * @param arr {Array} Array of numbers
 * @returns {Array}
 */
export function sortArray(arr) {
  // your implementation here
  return arr.sort((a, b) => a - b);
}


/**
 * Write an implementation of the 'sumListValues' function
 * that returns the sum of all values in the list
 *
 * For the implementation, use for loop or recursion (or try to solve the problem using both of these methods)
 *
 * @param list
 * @returns {number}
 */
export function sumListValues(list) {
  // your implementation here

let value, key, num;
let result = 0

if (typeof list !== "object" || list === null) {
  return list; // Return the value if obj is not an object
}

for (key in list) {
  value = list[key];
  // Recursively (deep) copy for nested objects, including arrays
  if (typeof list[key] === 'object' && value !== null) {
    console.log(value.value);

    result = value.value + value.value
    sumListValues(value)
    return result
  }
}

}

console.log(sumListValues({
  value: 2,
  next: {
    value: 4,
    next: {
      value: 5,
      next: {
        value: 6,
        next: {
          value: 7,
          next: {
            value: 8,
            next: {
              value: 9,
              next: null,
            },
          },
        },
      },
    },
  },
}))
