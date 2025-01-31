const today = new Date();

for (let i = 0; i < 7; i++) {
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + i);
    console.log(`Day ${i + 1}: ${futureDate.toDateString()}`);
}


// Day 1: Fri Jan 31 2025
// Day 2: Sat Feb 01 2025
// Day 3: Sun Feb 02 2025
// Day 4: Mon Feb 03 2025
// Day 5: Tue Feb 04 2025
// Day 6: Wed Feb 05 2025
// Day 7: Thu Feb 06 2025