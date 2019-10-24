const readlineSync = require("readline-sync");
const hw1 = Number(readlineSync.question("Enter three homework grades.\n"));
const hw2 = Number(readlineSync.question(""));
const hw3 = Number(readlineSync.question(""));
const hw = (hw1 + hw2 + hw3) / 3;

const qz1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
const qz2 = Number(readlineSync.question(""));
const qz3 = Number(readlineSync.question(""));
const quiz = (qz1 + qz2 + qz3) / 3;

const test1 = Number(readlineSync.question("\nEnter three test grades.\n"));
const test2 = Number(readlineSync.question(""));
const test3 = Number(readlineSync.question(""));
const test = (test1 + test2 + test3) / 3;

const final = (hw * 0.15) + (quiz * 0.35) + (test * 0.5);
const rounded = Math.round(final * 100) / 100;
console.log("Your marking period grade is " + rounded + "%.");
