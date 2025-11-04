// Select the form first
let form1 = document.getElementById("cashout-form");


let cashoutBtn = document.getElementById('login-btn-cashout');
    cashoutBtn.addEventListener('click', function(event){
    //   Remove the default reload action
        event.preventDefault();
      
        // ✅ Check HTML5 required validation manually
  if (!form1.checkValidity()) {
    // Check if the form is valid with correct input types
    form1.reportValidity(); // Triggers built-in browser messages (like "Please fill out this field")
    return; // Stop further code execution
  }

        // Get the value of the Account Number and Pin fields
        let AccountNumberCashout =  document.getElementById('Account-number-cashout').value;
        let pinNumberCashout = document.getElementById('pin-number-cashout').value;

    if(AccountNumberCashout.length == 11){
            if(pinNumberCashout.length == 4){
               alert("Cash Out Successful. " );

        let cashoutAmount = document.getElementById('cashout-amount').value;
        // get the main balance
        let mainBalance1 = document.getElementById('main-balance').innerText;
        let mainBalanceFloat1 = parseFloat(mainBalance1);

        let correctionCashout1 = parseFloat(cashoutAmount);

        let mainCashOut = mainBalanceFloat1 - correctionCashout1;
        
        // Insert the main value into the main Account Balance 
        document.getElementById('main-balance').innerText = mainCashOut;
   
            }
             else {
                alert("Invalid Pin Number");
            }
    }
    else {
        alert("Invalid Account Number");
    }

    });