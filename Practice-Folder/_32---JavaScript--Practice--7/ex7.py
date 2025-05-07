let string1 = "JavaScript";
let string2 = "javascript";

if (string1 === string2) {
    console.log("The strings are equal (case-sensitive).");
} else if (string1.toLowerCase() === string2.toLowerCase()) {
    console.log("The strings are equal (case-insensitive).");
} else {
    console.log("The strings are not equal.");
}
