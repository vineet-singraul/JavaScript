let date = new Date("01/01/2025");

let year = date.getFullYear();
let month = date.getMonth()+1; // 0 = January, so 3 = April
let day = date.getDay()+1;     // 0 = Sunday, 1 = Monday, ...
let dateNum = date.getDate(); // day of the month
let time = date.getTime();
let hours = date.getHours();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();
let dateString = date.toDateString();

console.log("Year:", year);
console.log("Month (0-indexed):", month);  // 3 = April
console.log("Day of the week (0=Sunday):", day);
console.log("Day of the month:", dateNum);
console.log("Time in milliseconds since Jan 1, 1970:", time);
console.log("Hours:", hours);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Date String:", dateString);
