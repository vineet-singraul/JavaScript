const handleTime = () => {
    let usertime = document.getElementById("getDateUser").value;  // e.g., "13:45"
    alert("Time set");
    document.getElementById("h1").textContent = `Time selected: ${usertime}`;

    // ⛔ Removed this line (invalid):
    // usertime.textContent = ""

    // ⏰ Extract user input hours and minutes
    let [userHours, userMinutes] = usertime.split(":").map(Number);  // convert to numbers

    // 🕒 Get current time
    let nowTime = new Date();
    let currHours = nowTime.getHours();
    let currMinutes = nowTime.getMinutes();

    let resHours, resMinutes;

    // ⏳ Calculate time difference
    if (currHours >= userHours) {
        resHours = currHours - userHours;
        resMinutes = currMinutes - userMinutes;
        if (resMinutes < 0) {
            resMinutes = -resMinutes;
        }
        console.log("1 Final result:", "Hours:", resHours, "Minutes:", resMinutes);
    } else {
        resHours = userHours - currHours;
        resMinutes = userMinutes - currMinutes;
        if (resMinutes < 0) {
            resMinutes += 60;
            resHours -= 1;
        }
        console.log("2 Final result:", "Hours:", resHours, "Minutes:", resMinutes);
    }

    // ⏬ Display result
    document.getElementById("set").innerHTML = `
        <h2>Time Difference</h2>
        <h3>Hours: ${resHours}</h3>
        <h3>Minutes: ${resMinutes}</h3>
    `;

    let totalMilliseconds = ((resHours * 60) + resMinutes) * 60 * 1000;

    setTimeout(() => {
        let audio = new Audio('mo.mp3');
        audio.play();
        alert("⏰ Time's up!");
    }, totalMilliseconds);

     

}
