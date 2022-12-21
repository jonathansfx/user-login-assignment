// Event Listener
let btn = document.getElementById("btnEl");
btn.addEventListener("click", btnClicked);

function btnClicked() {
  // HTML Variables
  let user = document.getElementById("userEl").value;
  let pass = document.getElementById("passEl").value;
  // If Statement
  if (user == "admin" && pass == "1234") {
    alert = "Login successful";
  }
}
