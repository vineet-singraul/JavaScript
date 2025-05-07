function isLeapYear(year) {
    const date = new Date(year, 1, 29); 
    return date.getDate() === 29; 
}

for (let year = 2020; year <= 2030; year++) {
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}




// 2020 is a leap year.
// 2021 is not a leap year.
// 2022 is not a leap year.
// 2023 is not a leap year.
// 2024 is a leap year.
// 2025 is not a leap year.
// 2026 is not a leap year.
// 2027 is not a leap year.
// 2028 is a leap year.
// 2029 is not a leap year.
// 2030 is not a leap year.
