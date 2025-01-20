const fatchData = async () => {
    let url = 'http://localhost:3000/Doctor';

    let response = await fetch(url, { method: "GET" });
    let data = await response.json();

    console.log(data);

    let show = document.querySelector("#display");

    data.map((e) => {
        show.innerHTML += `
        <div id="card">
            <div id="details">
                <h3 id="name">${e.name}</h3>
                <div class="singleData">
                    <strong>Age </strong><strong id="age" class="A">${e.age}</strong>
                </div>
                <div class="singleData">
                    <strong>Number </strong><strong id="number">${e.number}</strong>
                </div>
                <div class="singleData">
                    <strong>Problem </strong><strong id="problem">${e.problem}</strong>
                </div>
                <div class="singleData">
                    <strong>Location </strong><strong id="location">${e.location}</strong>
                </div>
                <div class="singleData">
                    <strong>Price </strong><strong id="price">${e.Price}</strong>
                </div>
            </div>
            <div id="button">
                <button id="delete" onclick="deleteAllData('${e.id}')">Delete</button>
                <button id="edit">Edit</button>
            </div>
        </div>`;
    });
};


// Delete the all data from the card 
const deleteAllData = (id) => {
    let url = `http://localhost:3000/Doctor/${id}`;
    fetch(url, { method: "DELETE" });
};



// Set aLL the data using the from
const SetAllDataInCard = () => {
    let userName = document.querySelector("#name").value;
    let userAge = document.querySelector("#age").value;
    let userNumber = document.querySelector("#number").value;
    let userProblem = document.querySelector("#problem").value;
    let userLocation = document.querySelector("#location").value;
    let userPrice = document.querySelector("#price").value;

    console.log(userName);
    console.log(userAge);
    console.log(userNumber);
    console.log(userLocation);
    console.log(userProblem);
    

    let url = 'http://localhost:3000/Doctor';
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            age: userAge,
            number: userNumber,
            problem: userProblem,
            location: userLocation,
        })
    });

    location.href = "Data.html";
    return false;
};
