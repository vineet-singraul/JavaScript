function getFirstMonday(year, month) {
    let date = new Date(year, month, 1); 
    while (date.getDay() !== 1) { 
        date.setDate(date.getDate() + 1);
    }    
    return date;  
}
for (let month = 0; month < 12; month++) {
    let firstMonday = getFirstMonday(2024, month);
    console.log(`First Monday of ${firstMonday.toLocaleString('en-US', { month: 'long', year: 'numeric' })}: ${firstMonday.toDateString()}`);
}
