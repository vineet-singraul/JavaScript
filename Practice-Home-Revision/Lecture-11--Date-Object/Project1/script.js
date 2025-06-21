const onLoad = () => {
  let Hours = document.getElementById('Hours');
  let Minet = document.getElementById('Minet');
  let second = document.getElementById('second');
  let milisec = document.getElementById('milisec');
  let AMPM = document.getElementById('AMPM');

  setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minet = date.getMinutes();
    let seconds = date.getSeconds();
    let milisecons = date.getMilliseconds();

    // AM/PM calculation
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if 0 then set to 12

    // Optional: Add leading zeros for better UI
    Hours.innerHTML = hours.toString().padStart(2, "0");
    Minet.innerHTML = minet.toString().padStart(2, "0");
    second.innerHTML = seconds.toString().padStart(2, "0");
    milisec.innerHTML = milisecons.toString().padStart(3, "0");
    AMPM.innerHTML = ampm;
  }, 100); // 100ms for smoother milliseconds
};
