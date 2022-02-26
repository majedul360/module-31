const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const min = Math.min(...numbers);
console.log(min);
const number2 = [11, 13, ...numbers];
console.log(number2);
console.log(numbers);
numbers.push(22);
console.log(number2);
console.log(numbers);
