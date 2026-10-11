
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Congratulations! My JavaScript works!";
});
