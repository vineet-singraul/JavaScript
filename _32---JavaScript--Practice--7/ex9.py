let password = "secret123";
let input = "Secret123";

// Check if the passwords match (case-sensitive)
if (password === input) {
    console.log("Password is correct.");
} else {
    console.log("Password is incorrect.");
}

// Check if the passwords match (case-insensitive)
if (password.toLowerCase() === input.toLowerCase()) {
    console.log("Password is correct (case-insensitive check).");
} else {
    console.log("Password is incorrect.");
}
