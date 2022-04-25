const signupButton = document.getElementById("signup-button");
const loginButton  = document.getElementById("login-button");
const homeButton   = document.getElementById("home-button");


signupButton.addEventListener("click", function() {
    alert("You're already on that page silly goose");
  });
loginButton.addEventListener("click", function() {
    location.href = "../HTML-files/login.html";
});
homeButton.addEventListener("click", function() {
  location.href = "../";
});

// if I want to go back I just have to make one of these for each one