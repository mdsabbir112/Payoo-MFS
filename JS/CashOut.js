

let cashoutBtn = document.getElementById('login-btn-cashout');
    cashoutBtn.addEventListener('click', function(event){
    //   Remove the default reload action
        event.preventDefault();
      
        let cashoutAmount = document.getElementById('cashout-amount').value;
        // get the main balance
        let mainBalance1 = document.getElementById('main-balance').innerText;
        let mainBalanceFloat1 = parseFloat(mainBalance1);

        let correctionCashout1 = parseFloat(cashoutAmount);

        let mainCashOut = mainBalanceFloat1 - correctionCashout1;
        
        // Insert the main value into the main Account Balance 
        document.getElementById('main-balance').innerText = mainCashOut;
    })