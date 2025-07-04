let date = new Date();
console.log("First : ",date);

let year = date.getFullYear();
let month = date.getMonth(); // 0 = January, 11 = December
let day = date.getDay();     // 0 = Sunday, 6 = Saturday
let time = date.getTime();
let hours = date.getHours();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();
let dateString = date.toDateString();

console.log("Year:", year);
console.log("Month (0-indexed):", month);
console.log("Day (0=Sunday):", day);
console.log("Time in milliseconds since Jan 1, 1970:", time);
console.log("Hours:", hours);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Date String:", dateString);

