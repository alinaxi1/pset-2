const readlineSync = require("readline-sync");
const salary = Number(readlineSync.question("\nAnnual Salary: "));

const pretax = (salary * 0.93);
const federal = (pretax * 0.157);
const state = (pretax * 0.0447);
const security = (pretax * 0.062);
const medicare = (pretax * 0.0145);

const pay = pretax - (federal + state + security + medicare);
const payday = pay / 24;
const format = payday.toLocaleString("en", { style: "currency", currency: "USD" });

console.log("\nYour take-home pay each check will be " + format + ".");
