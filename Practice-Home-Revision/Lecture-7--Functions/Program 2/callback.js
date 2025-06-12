function greet(name,sayBuy){
  console.log("Hello "+name);
  sayBuy()  
}

function sayBuy(){
    console.log("Ram Ram");
}

greet("Vineet",sayBuy)