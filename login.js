function checkData() {
  const enterEmail = document.getElementById("email");
  const enterPassword = document.getElementById("password");
  //    get the data from localstorage

  const getEmail = localStorage.getItem("userEmail");
  const getPassword = localStorage.getItem("userPassword");

  if (enterEmail.value.match (getEmail)) {
    if (enterPassword.value.match(getPassword)) {
      alert("login successful");
    } else {
      alert("login failed");
    }
  } else {
    alert("invalid details");
  }
}
