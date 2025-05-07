const getData = async () => {
    let url = 'http://localhost:3000/Doctor';
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    console.log(data);


    let show = document.querySelector("#Display")

    data.map((e) => {
        show.innerHTML += `
                        <div class="data-card">
                            <div class="card">
                              <h2 class="name">${e.name}</h2>
                              <p><strong>Age:</strong>${e.age}</p>
                              <p><strong>Contact Number:</strong>${e.number}</p>
                              <p><strong>Problem:</strong>${e.problem}</p>
                              <p><strong>Location:</strong>${e.location}</p>
                              <p><strong>Price:</strong> RS.. 500</p>
                            </div>
                            <div>
                               <button onclick="DeleteData('${e.id}')">Delete</button>
                               <button>Edit</button>
                            </div>
                        </div>`
    });
}


const DeleteData = (id) => {
    let url = `http://localhost:3000/Doctor/${id}`;
      fetch(url, {method : "DELETE"})
}