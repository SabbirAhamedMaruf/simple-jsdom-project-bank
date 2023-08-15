// Dashboard

let deposit = 0;
let withdraw = 0;
let Balance = 1240;

// deposit
document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositAmount = parseInt(document.getElementById("deposit").value);
  let depositWindow = parseInt(
    document.getElementById("deposit-window").innerText
  );
  let balanceAmount = parseInt(
    document.getElementById("balance-window").innerText
  );

  function add(depositAmount, depositWindow, balanceAmount) {
    depositWindow = depositWindow + depositAmount;
    balanceAmount = depositAmount + balanceAmount;
    document.getElementById("deposit-window").innerText = depositWindow;
    document.getElementById("balance-window").innerText = balanceAmount;
  }
  if (isNaN(depositAmount)==true) {
    alert("Please enter deposit amount!");
  } else {
    add(depositAmount, depositWindow, balanceAmount);
  }
});

// withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawAmount = parseInt(document.getElementById("withdraw").value);
  let withdrawWindow = parseInt(
    document.getElementById("withdraw-window").innerText
  );
  let balanceAmount = parseInt(
    document.getElementById("balance-window").innerText
  );
  function add(withdrawAmount, withdrawWindow, balanceAmount) {
    withdrawWindow = withdrawWindow + withdrawAmount;
    balanceAmount = balanceAmount - withdrawAmount;
    document.getElementById("withdraw-window").innerText = withdrawWindow;
    document.getElementById("balance-window").innerText = balanceAmount;
  }
  if (isNaN(withdrawAmount)==true) {
    alert("Please enter withdraw amount!");
  }
  else if(withdrawAmount>balanceAmount){
    alert("Can't withdraw more than balance!")
  } 
  else {
    add(withdrawAmount, withdrawWindow, balanceAmount);
  }
});

// Logout
document.getElementById("btn-logout").addEventListener("click", function () {
  console.log("logout btn-clicked");
  window.location.href = "../index.html";
});
