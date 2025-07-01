// Reverse for array :
// let arr = [1,2,3,4,5]
// let arr1 = []
// let len = arr.length-1
// for (var i=len ; i>=0 ; i--)
// {
//     arr1.push(arr[i])
// }
// console.log(arr1);



// Reverse for String
let names = "vineet"
let names2 = []
let l = names.length-1
for(var i=l ; i>=0 ; --i)
{
  names2.push(names[i])
}
let x = ""+names2.join('')
console.log(x);
