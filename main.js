// HTML Variables
let user = document.getElementById("userEl");
let pass = document.getElementById("passEl");
// Event Listener
let btn = document.getElementById("btnEl");
btn.addEventListener("click", btnClicked);

function btnClicked() {
  // If Statement
  if (user == "admin" && pass == "1234") {
    alert("Login Successful");
  }
}
