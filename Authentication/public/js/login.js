// const axios = require('axios')
async function validateLogin() {
  const username = document.getElementById("username").value;
  const userpassword = document.getElementById("userpassword").value;
  const userdata = {
    username: username,
    password: userpassword,
  };
  console.log(userdata);
  console.log(JSON.stringify(userdata));
  const call = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  };

  try {
    const res = await fetch("http://localhost:3000/validateLogin", call);
    console.log(res);
    if (res.data) {
      alert("Login details verified");
      // redirect(todo);
    }
  } catch (e) {
    console.log(e);
    alert("Error while login");
  }
}

window.onload = function () {
  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", validateLogin);
};
