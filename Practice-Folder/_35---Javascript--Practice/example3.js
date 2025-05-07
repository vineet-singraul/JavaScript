let num = 2, count = 0;
while (count < 5) { 
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime:", num);
        count++;
    }
    num++;
}       
