const readlineSync = require("readline-sync");
const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const bus = Number(readlineSync.question("Bus capacity: "));

const total = Math.round((teachers + students) / bus);
const passenger = (teachers + students % bus);
console.log(total + " bus(es) is (are) needed, with " + passenger + " passenger(s) on the last bus.");
