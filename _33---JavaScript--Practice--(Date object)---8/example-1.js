const today = new Date();
const day = today.getDay(); 

if (day === 0 || day === 6) {
    console.log("It's a weekend!");
} else {
    console.log("It's a weekday.");
}


// 0 = Sunday, 6 = Saturday