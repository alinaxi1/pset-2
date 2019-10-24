const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync. question("Length: ");
const inches = (width * length);
const millimeters = (inches * 25.4 * 25.4);
const area = millimeters.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of "  + area + " square millimeters(s)");
