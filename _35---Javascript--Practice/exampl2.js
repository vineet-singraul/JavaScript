for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if ((i * j) % 2 === 0) {
            row += (i * j) + "\t";
        } else {
            row += "X\t";
        }
    }
    console.log(row);
}
