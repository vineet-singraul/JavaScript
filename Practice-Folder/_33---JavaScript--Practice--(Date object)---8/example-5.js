function getFirstMonday(year, month) {
    let date = new Date(year, month, 1);
    while (date.getDay() !== 1) { // 1 = Monday
        date.setDate(date.getDate() + 1);
    }
    return date;
}

let firstMonday = getFirstMonday(2024, 2); // March 2024
console.log(`The first Monday of the month is: ${firstMonday.toDateString()}`);
