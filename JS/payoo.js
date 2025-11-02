// Select the form first
let form = document.querySelector("form");

// Add an Event on the login field
let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Remove the default action of automatically Loading the form and its Value

  // ✅ Check HTML5 required validation manually
  if (!form.checkValidity()) {
    // Check if the form is valid with correct input types
    form.reportValidity(); // Triggers built-in browser messages (like "Please fill out this field")
    return; // Stop further code execution
  }

  // Get the value of the Account Number and Pin fields
  let accountNumber = document.getElementById("Account-number").value;
  let pinNumber = document.getElementById("pin-number").value;
  console.log(accountNumber, pinNumber);
  // Validate the input fields
  // console.log(typeof accountNumber);
  // console.log(typeof pinNumber);

  // convert the String Value to Integer Value with parseInt() function
  let accountNumberInt = parseInt(accountNumber);
  let pinNumberInt = parseInt(pinNumber);
  // console.log(typeof accountNumberInt);
  // console.log(typeof pinNumberInt);

  // Condition for the valid Account Number and Pin Number
  if (accountNumber.length === 11) {
    if (pinNumber.length === 4) {
      window.location.href = "../main.html"; // link up the main html page with the login button
      alert("Login Successful");
    } else {
      alert("Invalid Pin Number");
    }
  } else {
    alert("Invalid Account Number");
  }
});
