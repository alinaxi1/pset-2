const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync. question("Length: ");
const area = (width * 25.4) * (length * 25.4);
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of "  + area + " square millimeters(s)")
