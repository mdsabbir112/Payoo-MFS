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

// Handle the various limitations
if(correctionAdd <= 0){
    alert('Invalid Amount. Please enter a valid amount greater than zero.');
    return; // Stop the further code execution
  }

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


        // Insert the transections details into the transection Sections
        let transactionSection = document.getElementById('transaction-section');
            transactionSection.style.textAlign = 'center';
            let newTransaction  =  document.createElement('p');   

        // This section is for Declare the date and the time
        let now = new Date();

         // transaction id generation
                let transactionId = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number

            // insert the details from the add money
            newTransaction.innerText = `
            Add Money: +${correctionAdd} | Account Number: ${accountNumberInt} | Trans Id: ${transactionId} | Date: ${now.toLocaleDateString()} | Time: ${now.toLocaleTimeString()}`

            // append child into the main div section
            transactionSection.appendChild(newTransaction);
      alert("Money Added Successfully");  
    } 
    else {
      alert("Invalid Pin Number");
    }
  } 
  else {
    alert("Invalid Account Number");
  } 


}); 