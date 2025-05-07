let sentence = "I love JavaScript!";
if (sentence.includes("JavaScript")) {
  console.log("Using substring: " + sentence.substring(7, 17));
  console.log("Using slice: " + sentence.slice(7, 17)); 
} else {
  console.log("The word 'JavaScript' is not in the sentence.");
}
