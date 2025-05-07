let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "fox";

// Check if the word is in the sentence and find its position
let position = sentence.indexOf(word);
if (position !== -1) {
    console.log(`The word "${word}" is found at position ${position}.`);
} else {
    console.log(`The word "${word}" is not found in the sentence.`);
}
