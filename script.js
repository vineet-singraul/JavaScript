let counter = 0;
let data = document.querySelector("#count");

const INCRE = () => {
   counter++;
   Updat();
}

const DECREM=()=>{
    counter--;
    Updat();
}

const Updat=()=>{
    data.innerHTML=counter;
}