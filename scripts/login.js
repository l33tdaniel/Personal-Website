const signupButton = document.getElementById("signup-button");
const loginButton  = document.getElementById("login-button");
const homeButton   = document.getElementById("home-button");


signupButton.addEventListener("click", function() {
    location.href = "/HTML-files/signup.html";
  });
loginButton.addEventListener("click", function() {
    alert("You're already on this page silly goose")
});
homeButton.addEventListener("click", function() {
  location.href = "../";
});

// if I want to go back I just have to make one of these for each one