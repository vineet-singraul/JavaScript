const users = [
    { username: "admin", password: "admin123" },
    { username: "john_doe", password: "john456" },
    { username: "alice99", password: "alice@789" },
    { username: "charlieX", password: "pass2024" }
];

function userExists(username) {
    return users.some(user => user.username.includes(username));
}

function login(username, password) {
    if (!userExists(username)) {
        console.log("❌ User not found! Please register first.");
        return;
    }

    let user = users.find(user => user.username === username);

    if (user.password === password) {
        console.log(`✅ Welcome, ${username}! You have successfully logged in.`);
    } else {
        console.log("❌ Incorrect password. Please try again.");
    }
}

function register(username, password) {
    if (userExists(username)) {
        console.log("❌ Username already taken! Try another one.");
    } else {
        users.push({ username, password });
        console.log(`✅ User ${username} registered successfully!`);
    }
}

function showMenu() {
    console.log("\n========= USER AUTH SYSTEM =========");
    console.log("1. Login");
    console.log("2. Register");
    console.log("3. Exit");
    console.log("====================================");
}

let running = true;
const prompt = require("prompt-sync")();

while (running) {
    showMenu();
    let choice = prompt("Enter your choice (1-3): ");

    switch (choice) {
        case "1":
            let loginUsername = prompt("Enter username: ");
            let loginPassword = prompt("Enter password: ");
            login(loginUsername, loginPassword);
            break;
        
        case "2":
            let newUsername = prompt("Choose a username: ");
            let newPassword = prompt("Choose a password: ");
            register(newUsername, newPassword);
            break;

        case "3":
            console.log("👋 Exiting program. Goodbye!");
            running = false;
            break;

        default:
            console.log("❌ Invalid choice! Please enter a valid option.");
    }
}
