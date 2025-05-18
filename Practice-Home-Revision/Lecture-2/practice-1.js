function VariableUnder() {
    console.log(greet);
    var greet = "Jai Sree Ram"
    console.log(greet);
    console.log("--------------");

    // console.log(againgreet);    // ye pahle call nhi karne deta hai hoisting allow nhi hai
    let againgreet = "Jai Sita Ram"
    console.log(againgreet);
    console.log("--------------");

    // console.log(greetc);    // ye pahle call nhi karne deta hai hoisting allow nhi hai
    const greetc = "Jai Sree Ram"
    console.log(greetc);
    console.log("--------------");
    
}

VariableUnder()