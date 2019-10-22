const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const inches = (width * 2) + (length * 2);
const centimeters = (inches * 2.54);
const rounded = Math.round(centimeters * 100) / 100;
const perimeter = rounded.toLocaleString('en');
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of "  + perimeter + " centimeters(s).");
