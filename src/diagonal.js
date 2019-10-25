const readlineSync = require("readline-sync");
const width = readlineSync.question("\nWidth: ");
const length = readlineSync. question("Length: ");
const added = (width * width) + (length * length);
const sqrt = Math.sqrt(added);
const rounded = Math.round(sqrt * 100) / 100;
const diagonal = rounded.toLocaleString('en', {minimumSignificantDigits : 4});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of "  + diagonal + " inch(es).");
