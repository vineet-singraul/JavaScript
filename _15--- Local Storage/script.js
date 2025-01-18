let set=()=>{
    localStorage.setItem("name","vineet");
    localStorage.setItem("age","20");

  


}




// document.querySelector("#head").innerHTML = localStorage.getItem("name")
// document.querySelector("#head1").innerHTML = localStorage.getItem("age")

let show = document.querySelector("#head")
// show.innerHTML = localStorage.getItem("name")

show.innerHTML = ` Hai i am ${localStorage.getItem("name")} and my age is ${localStorage.getItem("age")}`


// Delete one one data from local
let remove=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("age");
}

let CleareAll=()=>{
    localStorage.clear();
}