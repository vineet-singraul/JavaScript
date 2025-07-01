let arr = [1,3,5,122,3,44]
let fl = arr[0]
let sl = 0
for(let i=1; i<arr.length;++i)
{
    if (fl<arr[i]) {
        sl = fl
        fl = arr[i]
    }

    // second largest 
    else if (arr[i] < fl && arr[i] > sl) {
        sl = arr[i];
    }

}
console.log("The First Largest Value Is : ",fl);
console.log("The Second Largest Value Is : ",sl);
