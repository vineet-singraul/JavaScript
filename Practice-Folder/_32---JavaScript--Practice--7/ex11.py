let text = "Hello@World!";

if (/[^a-zA-Z0-9]/.test(text)) {
    console.log("The string contains special characters.");
} else {
    console.log("The string does not contain special characters.");
}
