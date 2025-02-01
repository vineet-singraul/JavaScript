const futureDate = new Date("2025-12-31");
let currentDate = new Date(); 

while (currentDate < futureDate) {
    console.log(`Current Date: ${currentDate.toDateString()}`);
    currentDate.setDate(currentDate.getDate() + 1); 
}
console.log("Reached the target date!");


// Current Date: Fri Jan 31 2025
// Current Date: Sat Feb 01 2025
// Current Date: Sun Feb 02 2025
// ...
// Current Date: Mon Dec 29 2025
// Current Date: Tue Dec 30 2025
// Reached the target date!
