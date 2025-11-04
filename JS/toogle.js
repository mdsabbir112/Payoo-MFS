// By Default Value are here
document.getElementById("addmoney-section").style.display = "block";

document.getElementById("cashout-section").style.display = "none";

// Function for Toggle between Sections

document.getElementById("card1").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
});

document.getElementById("card2").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";
});