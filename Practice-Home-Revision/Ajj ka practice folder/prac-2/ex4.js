let arr = [1,2,3,5,2,3,5,4,1,3,4,6,7,78]
let arr2 = []
for(let i=0 ;i<arr.length-1;++i)
{
    for(let j=i+1; i<arr.length-1; ++j)
    {  
        let c = 0
        if (arr[i] === arr[j]) {
            c = c + 1
            if(c === 1)
            {
                arr2.push(arr[j])
            }
            
        }
    }
}

console.log(arr2);
