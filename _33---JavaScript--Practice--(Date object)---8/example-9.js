const date1 = new Date('2024-02-01');
const date2 = new Date('2024-02-01T12:30:00');

const isSameDay = date1.toDateString() === date2.toDateString();

console.log(isSameDay ? "The dates are the same." : "The dates are different.");

