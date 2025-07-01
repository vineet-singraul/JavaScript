let arr = [11,32,3,4,5,6,7,8,23,0,21]
let max = arr[0]
let min = arr[0]
for(let i=0 ; i<arr.length-1; ++i)
{
    if (max < arr[i]) {
        max = arr[i]
    }
    else if (min > arr[i])
    {
        min = arr[i]
    }
}
console.log("The Max Value In Array Is : ",max);
console.log("The Min Value In Array Is : ",min);