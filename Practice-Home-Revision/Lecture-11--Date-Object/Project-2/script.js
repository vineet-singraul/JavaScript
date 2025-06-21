const calculateAge = () => {
  let userdob = document.getElementById("dob").value;

  if (!userdob) {
    alert("Please select a valid date.");
    return;
  }

  let birthDate = new Date(userdob);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate(); // add days of previous month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Total hours calculation
  const diffMs = today - birthDate;
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));

  // Display the results
  document.getElementById("result1").innerText = `${years} years`;
  document.getElementById("result2").innerText = `${months} months`;
  document.getElementById("result3").innerText = `${days} days`;
  document.getElementById("result4").innerText = `${totalHours} hours`;
};
