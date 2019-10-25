const square = (48 * 24);
const hole = (3 * 3 * Math.PI);
const area = (square - hole);
const round = Math.round(area * 100) / 100;
const final = round.toLocaleString('en');

console.log("\nThe surface area of a standard Cornhole board is " + final + " square inch(es).");
