const SignAllData = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page.

    let nameInput = document.querySelector("#name").value;
    let ageInput = document.querySelector("#age").value;
    let emailInput = document.querySelector("#email").value;
    let numberInput = document.querySelector("#number").value;
    let locationInput = document.querySelector("#location").value;
    let passwordInput = document.querySelector("#password").value; // This will now work

    // Validate Name Input
    if (nameInput === "") {
        document.querySelector("#name").style.border = "2px solid red";
        return false;
    } else {
        document.querySelector("#name").style.border = "2px solid green";
    }

    // Validate Age Input
    if (ageInput === "" || isNaN(ageInput)) {
        document.querySelector("#age").style.border = "2px solid red";
        return false;
    } else {
        document.querySelector("#age").style.border = "2px solid green";
    }

    // Validate Email Input
    if (emailInput === "" || !emailInput.includes('@') || !emailInput.includes('.com')) {
        document.querySelector("#email").style.border = "2px solid red";
        return false;
    } else {
        document.querySelector("#email").style.border = "2px solid green";
    }

    // Validate Number Input
    if (!/^\d+$/.test(numberInput)) {
        document.querySelector("#number").style.border = "2px solid red";
        return false;
    } else {
        document.querySelector("#number").style.border = "2px solid green";
    }

    // Validate Location Input
    if (locationInput === "") {
        document.querySelector("#location").style.border = "2px solid red";
        return false;
    } else {
        document.querySelector("#location").style.border = "2px solid green";
    }

    // Log inputs
    console.log(nameInput);
    console.log(ageInput);
    console.log(emailInput);
    console.log(numberInput);
    console.log(locationInput);
    console.log(passwordInput);

    // Store inputs in localStorage
    localStorage.setItem("Name", nameInput);
    localStorage.setItem("Age", ageInput);
    localStorage.setItem("Email", emailInput);
    localStorage.setItem("Number", numberInput);
    localStorage.setItem("Location", locationInput);
    localStorage.setItem("Password", passwordInput);

    // Redirect
    location.href = 'login.html';

    return true;
};

// Attach event listener to the form
document.querySelector("#signupForm").addEventListener("submit", SignAllData);
