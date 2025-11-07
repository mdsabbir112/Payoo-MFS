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

        //  Handle various limitations

        let cashoutAmount = document.getElementById('cashout-amount').value;
        // get the main balance
        let mainBalance1 = document.getElementById('main-balance').innerText;
        let mainBalanceFloat1 = parseFloat(mainBalance1);

        let correctionCashout1 = parseFloat(cashoutAmount);
        if( correctionCashout1 > mainBalanceFloat1 ){
            alert('Insufficient Balance');
            return; //Stop the further code execution

        }



        // Verify the input fields and its requirements 

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

                // This section is for Declare the date and the time 
                let now = new Date();

                // transaction id generation
                let transactionId = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
            
                
        // Insert the transactions details into the transaction section
        let transactionSection = document.getElementById('transaction-section');
            transactionSection.style.textAlign = 'center';
            let newTransaction  =  document.createElement('p');
            // insert the details from the cash out
            newTransaction.innerText = `
            Cash Out: -${correctionCashout1} | Account Number: ${AccountNumberCashout} | Trans Id: ${transactionId} | Date: ${now.toLocaleDateString()} | Time: ${now.toLocaleTimeString()}`

            transactionSection.appendChild(newTransaction);
   
            }
             else {
                alert("Invalid Pin Number");
            }
    }
    else {
        alert("Invalid Account Number");
    }

    });