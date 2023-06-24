/*
var score = 10; // ES5 - Ecma
let result = 50; // ES6 - EcmaScript 2015
const PI = 3.14; // ES6

console.log(score);
console.log(result);
console.log(PI);
*/

let score = 10;
let result = "10";

// BEDMAS - Bracket Exponent Division Multiplication Addition Subtraction
let finalScore = score + result;
let penality = score - result;
let totalGames = "5";

console.log(finalScore);
console.log(penality);
console.log(typeof penality);
console.log(finalScore / totalGames);

let value = (finalScore ** 2 * 10) / (penality + totalGames);

console.log(value);
