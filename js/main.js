// ------------------------------------------------------------------------ Loading Screen Dissapear On Load -------

const loadingScreen = document.getElementById("loading");

window.addEventListener("load", () => {
  document.body.style.overflowY = "visible";
  loadingScreen.style.display = "none";
});

// ------------------------------------------------------------------------ Footer Date Updated -------

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();
