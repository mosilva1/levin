const form = document.getElementById("form-login");
function realizaLogin(event) {
  event.preventDefault();
  alert("Seja Bem-Vindo!");
  window.location.replace("levin.html");
}
form.addEventListener("submit", realizaLogin);
