let arr = [1,2,4,2,4,3,66,4,5]
let count ;
for(let i=0; i<arr.length-1; ++i)
{  
    count = 1
    for(let j=i+1; j<arr.length ; ++j)
    {
        if (arr[i]===arr[j]) {
            count = count + 1
        }
    }
    console.log("The Value Is ",arr[i]," And Its Count Is ",count);
}