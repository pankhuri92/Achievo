function redirect(redirectSite) {
    console.log("redirectSite", window.location.host + `/${redirectSite}`);
    window.location.href = window.location.origin + `/${redirectSite}`;
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