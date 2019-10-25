const readlineSync = require("readline-sync");
const wage = Number(readlineSync.question("\nHourly wage: "));
const monday = Number(readlineSync.question("\nMonday: "));
const tuesday = Number(readlineSync.question("Tuesday: "));
const wednesday = Number(readlineSync.question("Wednesday: "));
const thursday = Number(readlineSync.question("Thursday: "));
const friday = Number(readlineSync.question("Friday: "));
const saturday = Number(readlineSync.question("Saturday: "));
const sunday = Number(readlineSync.question("Sunday: "));

const sum = (monday + tuesday + wednesday + thursday + friday + saturday + sunday) * wage;
const format = sum.toLocaleString("en", { style: "currency", currency: "USD" });
console.log("\nYou'll make " + format + " this week.");
