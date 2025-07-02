function outer(){
    let msg = "i am outer function"
    function inner() {
        console.log(msg);
    }
    return inner()
}

outer()