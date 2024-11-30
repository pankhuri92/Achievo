function redirect(redirectSite) {
  console.log("redirectSite", window.location.host + `/${redirectSite}`);
  window.location.href = window.location.origin + `/${redirectSite}`;
}

function validateLogin() {
  const username = document.getElementById("username").value;
  const userpassword = document.getElementById("userpassword").value;
  const userdata = {
    username: username,
    password: userpassword,
  };
  console.log(JSON.stringify(userdata));
  const call = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  };

  fetch("http://localhost:3000/validateLogin", call)
    .then((data) => {
      console.log("Inside Fetch");
      if (!data.ok) {
        throw Error(data.status);
      }
      if (data.ok) {
        alert("Login details verified");
        redirect(todo);
      }
    })
    .then((update) => {
      console.log(update);
    })
    .catch((e) => {
      console.log(e);
    });
}

function addItem(category) {
  const taskInput = document.getElementById(category + "-task");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const list = document.getElementById(category + "-list");
  const listItem = document.createElement("li");
  /*listItem.textContent = taskText;*/
  listItem.className = "task-item";
  listItem.innerHTML = `
      <input type="text" value="${taskText}">
      <button class="delete-button" onclick="removeItem(this)">X</button>
  `;
  list.appendChild(listItem);
  taskInput.value = "";
}

function removeItem(button) {
  const listItem = button.parentElement;
  listItem.remove();
}

// Get all the star rating labels
const starRatingLabels = document.querySelectorAll(".star-rating label");

// Add event listeners for mouseenter and mouseleave
starRatingLabels.forEach((label) => {
  label.addEventListener("mouseenter", handleMouseEnter);
  label.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseEnter(event) {
  // Get the current hovered label and all labels before it
  const hoveredLabel = event.target;
  const previousLabels = getAllPreviousLabels(hoveredLabel);

  // Change the color of stars before the hovered label
  previousLabels.forEach((label) => {
    label.style.color = "orange";
  });
}

function handleMouseLeave(event) {
  // Get all the star rating labels and reset their color
  starRatingLabels.forEach((label) => {
    label.style.color = "#ccc";
  });
}

function getAllPreviousLabels(label) {
  // Get all the labels before the current label
  const previousLabels = [];
  let currentLabel = label.previousElementSibling;
  while (currentLabel) {
    previousLabels.push(currentLabel);
    currentLabel = currentLabel.previousElementSibling;
  }
  return previousLabels;
}

window.onload = function () {
  //Get All Redirect Buttons
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log('button.id', button.id)
      const redirectSite = button.id;
      redirect(`app/${redirectSite}`);
    });
  });
};
