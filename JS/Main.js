// Select the form first
let form = document.querySelector("form");

let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Remove the default action of automatically Loading the form and its Value         

  // ✅ Check HTML5 required validation manually
  if (!form.checkValidity()) {
    // Check if the form is valid with correct input types
    form.reportValidity(); // Triggers built-in browser messages (like "Please fill out this field")
    return; // Stop further code execution
  }

//   Get the Value from the Amount add input field
  let amountAdd = document.getElementById("add-amount").value;
//   console.log(typeof amountAdd);
let correctionAdd = parseFloat(amountAdd);
//   console.log(typeof correctionAdd);

// Main balance
 let mainBalance = document.getElementById("main-balance").innerText;
 let mainBalanceFloat = parseFloat(mainBalance);
//   console.log(typeof mainBalanceFloat);

// Get the value of the Account Number and Pin fields
  let accountNumber = document.getElementById("Account-number").value;
  let pinNumber = document.getElementById("pin-number").value;
  console.log(accountNumber, pinNumber);

  // convert the String Value to Integer Value with parseInt() function
  let accountNumberInt = parseInt(accountNumber);
  let pinNumberInt = parseInt(pinNumber);
 
  // Condition for the valid Account Number and Pin Number
  if (accountNumber.length === 11) {
    if (pinNumber.length === 4) {
     let sum = mainBalanceFloat + correctionAdd;
        document.getElementById("main-balance").innerText = sum;
      alert("Login Successful");  
    } 
    else {
      alert("Invalid Pin Number");
    }
  } 
  else {
    alert("Invalid Account Number");
  } 


}); 