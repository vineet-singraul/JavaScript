let attempts = 0;
let correctPassword = "secret123";
let userInput;

do {
    userInput = prompt("Enter password:");
    attempts++;

    if (userInput === correctPassword) {
        console.log("Access granted!");
        break;
    } else {
        console.log("Incorrect password, try again.");
    }
    
    if (attempts >= 3) {
        console.log("Too many failed attempts!");
        break;
    }
} while (true);
