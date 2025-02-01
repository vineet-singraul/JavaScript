const dateToCheck = new Date('2024-02-01');
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');

if (dateToCheck >= startDate && dateToCheck <= endDate) {
    console.log("The date is within the range.");
} else {
    console.log("The date is out of range.");
}
