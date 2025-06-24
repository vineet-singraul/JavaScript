// function fireEvent(){
//     alert("Hello 1")
// }


// function fireEvent(){
//     alert("Hello 2")
// }


// const btn = document.getElementById("EventLisnersOf")

// btn.addEventListener("click",()=>{
//     alert("LIserber IS Getting Soon...... 1")
// })

// btn.removeEventListener("click",()=>{
//     alert("LIserber IS Getting Soon...... 2")
// })




// parent.addEventListener("click", () => console.log("Parent clicked"));
// child.addEventListener("click", () => console.log("Child clicked"));
// // Output: Child clicked → Parent clicked



parent.addEventListener("click", () => console.log("Parent clicked"), { capture: true });
child.addEventListener("click", () => console.log("Child clicked"));
// Output: Parent clicked → Child clicked
