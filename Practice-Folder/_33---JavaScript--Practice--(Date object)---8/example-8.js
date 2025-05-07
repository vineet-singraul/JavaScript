const today = new Date();
const givenDate = new Date('2024-03-01');

if (givenDate < today) {
    console.log("The date is in the past.");
} else if (givenDate > today) {
    console.log("The date is in the future.");
} else {
    console.log("The date is today.");
}
