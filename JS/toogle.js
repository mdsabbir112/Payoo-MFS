// By Default Value are here
document.getElementById("addmoney-section").style.display = "block";

document.getElementById("cashout-section").style.display = "none";

document.getElementById("transfermoney-section").style.display = "none";

document.getElementById("transaction-section").style.display = "none";

document.getElementById("paybill-section").style.display = "none";

document.getElementById("getbonus-section").style.display = "none";


// Function for Toggle between Sections

// Add money section
document.getElementById("card1").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfermoney-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
    document.getElementById("paybill-section").style.display = "none";
    document.getElementById("getbonus-section").style.display = "none";
});

// cash out Section
document.getElementById("card2").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";
    document.getElementById("transfermoney-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
    document.getElementById("paybill-section").style.display = "none";
    document.getElementById("getbonus-section").style.display = "none";
});

// Transfer Money Section
document.getElementById("card3").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfermoney-section").style.display = "block";
    document.getElementById("transaction-section").style.display = "none";
    document.getElementById("paybill-section").style.display = "none";
    document.getElementById("getbonus-section").style.display = "none";
});

// Get Bonus Section
document.getElementById("card4").addEventListener("click", function(event) {
    event.preventDefault();
    console.log('get bonus are clicked ');
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfermoney-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
    document.getElementById("paybill-section").style.display = "none";
    document.getElementById("getbonus-section").style.display = "block";
});

// PayBill Section
document.getElementById("card5").addEventListener("click", function(event) {
    event.preventDefault();
    console.log('paybill are clicked');
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfermoney-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
    document.getElementById("paybill-section").style.display = "block";
    document.getElementById("getbonus-section").style.display = "none";
});

// Transaction Section
document.getElementById("card6").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfermoney-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "block";
    document.getElementById("paybill-section").style.display = "none";
    document.getElementById("getbonus-section").style.display = "none";
});