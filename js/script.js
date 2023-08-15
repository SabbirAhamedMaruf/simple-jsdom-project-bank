let dbusername = "sabbirahamedmaruf02@gmail.com";
let dbpassword = 12345;

document.getElementById("btn-login").addEventListener("click", function () {
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;
  if (emailValue == dbusername && passwordValue == dbpassword) {
    window.location.href = "../bankDpositSystem.html";
  } else {
    alert("Please enter correct username and password!");
  }
});
