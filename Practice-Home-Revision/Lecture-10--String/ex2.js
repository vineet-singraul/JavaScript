// 1 Lenght
// let E_name = "Vineet"
// console.log(E_name.length);

// 2 toUpperCase
// let s = "vineet"
// console.log(s.toUpperCase());


// 3 toLowerCase
// let s = "VINEET"
// console.log(s.toLowerCase());

// 4 includes
// let s = "vineet@gmail.com"
// console.log(s.includes("@gmail.com"));


// 5 indexOf
// let s = "vineet@gmail.com"
// console.log(s.indexOf("@"));


// 6 lastIndexOf
// let s = "vineet@gmail.com"
// console.log(s.lastIndexOf("m"));


// 7 slice()
// let s = "vineet@gmail.com"
// console.log(s.slice(0,6));


// 8 trim()
// let s = "  vineet@gmail.com  "
// console.log(s.trim());
// console.log(s);



// 9 split()
// let s = "vineet,@gmail,com"
// console.log(s.split(','));
// console.log(s);


// 10 replace()
// let s = "vineet@gmailcom"
// console.log(s.replace("vineet","mohni"));
// console.log(s);  // not real change


// 11 repalceAll()
// let s = "vineet is very good person and vineet fulll stack devloper vineet"
// console.log(s.replaceAll("vineet","mohni"));
// console.log(s);  // not real change


// 12  startWith()
// let s = "vineet is very good boy"
// console.log(s.startsWith("vineet"));
// console.log(s);  // return bool value



// 13  endWith()
// let s = "vineet is very good boy"
// console.log(s.endsWith("oy"));
// console.log(s.endsWith("boy"));
// console.log(s);  // return bool value



// 14 charAt()
// let s = "vineet is very good boy"
// console.log(s.charAt(4));  //return character of given positions



// 14  padStart()
// let s = "5"
// console.log(s.padStart(3,"0"));
// console.log(s);   // not real change 

// 15  padStart()
// let str = "5";
// console.log(str.padEnd(3, "0"));  // Output: "500"



// 17 match()
let str = "My name is Vineet";
let result = str.match(/name/);
console.log(result);
