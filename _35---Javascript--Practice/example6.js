const numbers = [12, 7, 18, 5, 9, 24, 30];
let evens = [];

for (let num of numbers) {
    if (num % 2 !== 0) {
        continue; // Skip odd numbers
    }
    evens.push(num);
}

console.log("Even Numbers:", evens);
