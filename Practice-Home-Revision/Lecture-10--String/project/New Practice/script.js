const handleDetail = (e) => {
  e.preventDefault(); // ✅ Prevent form reload

  let fullname = document.getElementById('fullname').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value;
  let confirmpass = document.getElementById('confirmpass').value;
  let error = document.getElementById('error');

  // Reset error
  error.innerHTML = "";
  error.style.color = "red";

  // Full Name Validation
  if (!isNaN(fullname) || fullname.length < 2) {
    error.innerHTML = "Please enter a valid name";
    return;
  }

  // Email Validation
  if (!email.includes('@')) {
    error.innerHTML = "Email must include @";
    return;
  }

  if (!email.includes('.com')) {
    error.innerHTML = "Email must include .com";
    return;
  }

  if((!password.match(/[a-z]/))
      || (!password.match(/[A-Z]/))
      || (!password.match(/[0-9]/))
      || (!password.match(/[!@#$%^&*()_+<>?/.,`]/)))
    {
        error.innerHTML = "make the srong password";
        return;
    }

  // Password Validation
  if (password.length < 6) {
    error.innerHTML = "Password must be at least 6 characters";
    return;
  }

  // Confirm Password
  if (password !== confirmpass) {
    error.innerHTML = "Passwords do not match";
    return;
  }

  // If everything is valid
  error.style.color = "green";
  error.innerHTML = "Form submitted successfully!";
};
