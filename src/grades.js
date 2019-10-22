const readlineSync = require("readline-sync");
const hw1 = readlineSync.question("Enter three homework grades.\n");
const hw2 = readlineSync.question("");
const hw3 = readlineSync.question("");
const hw = (hw1 + hw2 + hw3) / 3;

const qz1 = readlineSync.question("Enter three quiz grades.\n");
const qz2 = readlineSync.question("");
const qz3 = readlineSync.question("");
const quiz = (qz1 + qz2 + qz3) /3;

const test1 = readlineSync.question("Enter three test grades.\n");
const test2 = readlineSync.question("");
const test3 = readlineSync.question("");
const test = (test1 + test2 + test3) / 3;

const final = (hw * 0.15) + (quiz * 0.35) + (test * 0.5);
console.log("Your marking period grade is " + final + "%.")
