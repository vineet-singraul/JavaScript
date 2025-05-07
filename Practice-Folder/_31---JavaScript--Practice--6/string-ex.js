const prompt = require("prompt-sync")();

function formatText(input) {
    input = input.trim(); 
    input = input.toLowerCase(); 

    if (input.includes("bad")) {
        input = input.replace("bad", "not good"); 
    }

    let words = input.split(" ");
    let formattedText = words.join("-");

    return formattedText;
}

let userText = prompt("Enter a sentence: ");
console.log("Formatted text:", formatText(userText));
