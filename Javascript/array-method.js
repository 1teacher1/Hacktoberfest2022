/**
 * Array Methods in Javascript
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * find method returns one number by checking the true conditions
 * If not true returns undefined
 */
let number = numbers.find((item, index) => index === 4);
console.log(number); // 5

number = numbers.find((item, index) => index === 12);
console.log(number); // undefined

/**
 * map method returns array of same size but it modifies every element of array
 */

let mappedNumbers = numbers.map((item) => item ** 2); // Power 2 of every element
console.log(mappedNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

/**
 * filter method returns array with some or every element by filtering the element with false conditions
 */
let evenNumbers = numbers.filter((item) => item % 2 == 0); // even numbers array
console.log(evenNumbers); // [2, 4, 6, 8]

/**
 * findIndex method returns the index of element if element doesn't exists in array then returns -1.
 */

let index_of_5 = numbers.findIndex((item) => item === 5);
console.log(index_of_5); // 4

/**
 * reduce method reduces a array and return single value. Either it is a object, string, number
 */

let sum_of_array = numbers.reduce((accumulator, current_item) => {
  return accumulator + current_item;
}, 0);

console.log(sum_of_array); // 45

let product_of_array = numbers.reduce((accumulator, current_item) => {
  return accumulator * current_item;
}, 1);

console.log(product_of_array); // 362880

/**
 * reverse method reverses the element of array
 */

let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

/**
 * includes take element as parameter and return true / false by checking whether the element exists in array or not
 */
const has_10 = numbers.includes(10);
console.log(has_10); // false

/**
 * some method returns true if the condition is true for some element in the array otherwise false
 */
let some_item_equal_to_3 = numbers.some((item) => item === 3);
console.log(some_item_equal_to_3); // true

let some_item_equal_to_14 = numbers.some((item) => item === 14);
console.log(some_item_equal_to_14); // false

/**
 * every method returns true if the condition is true for every element in the array otherwise false
 */

let every_item_greater_than_zero = numbers.every((item) => item > 0);
console.log(every_item_greater_than_zero); // true

let every_item_is_divisible_by_two = numbers.every((item) => item % 2 == 0);
console.log(every_item_is_divisible_by_two); // false
