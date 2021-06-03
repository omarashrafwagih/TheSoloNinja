// ------------------------------------------------------------------------ Mobile Menu Show and Hide -------
// ------------------------------------------------------------------------ Mobile Menu Button Transform from Hamburg to Close -------

let menuIcon = document.getElementById("menu-icon");
let mobileMenu = document.getElementById("mobile-menu");

let firstbar = document.getElementById("firstbar");
let secondbar = document.getElementById("secondbar");
let thirdbar = document.getElementById("thirdbar");

menuIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("hideshow");

  if (mobileMenu.classList.contains("hideshow")) {
    firstbar.style.transform = "rotate(0deg)";
    secondbar.style.width = "17px";
    thirdbar.style.width = "25px";
    thirdbar.style.transform = "rotate(0deg)";
    thirdbar.style.marginTop = "8px";
  } else {
    firstbar.style.transform = "rotate(45deg)";
    secondbar.style.width = "0px";
    thirdbar.style.width = "32px";
    thirdbar.style.transform = "rotate(-45deg)";
    thirdbar.style.marginTop = "-12px";
  }
});

window.addEventListener("resize", function () {
  if (window.outerWidth > 670) {
    mobileMenu.classList.add("hideshow");
    firstbar.style.transform = "rotate(0deg)";
    secondbar.style.width = "17px";
    thirdbar.style.width = "25px";
    thirdbar.style.transform = "rotate(0deg)";
    thirdbar.style.marginTop = "8px";
  }
});

// ------------------------------------------------------------------------ Close Mobile Menu Automatic After Clicking Link -------

let links = document.querySelectorAll(".hideshow ul li a");
var i = 0;
for (i; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    mobileMenu.classList.toggle("hideshow");
    firstbar.style.transform = "rotate(0deg)";
    secondbar.style.width = "17px";
    thirdbar.style.width = "25px";
    thirdbar.style.transform = "rotate(0deg)";
    thirdbar.style.marginTop = "8px";
  });
}

// ------------------------------------------------------------------------ Down Buuton Svg Function -------

let downBtn = document.getElementById("down");

downBtn.addEventListener("click", function () {
  window.location.href = "#about";
});

// ------------------------------------------------------------------------ Loading Screen Temporary -------

let loading = document.getElementById("loading");

document.body.onload = function () {
  document.body.style.overflow = "visible";
  loading.style.display = "none";
};

// ------------------------------------------------------------------------ Footer Date Updated -------

let date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();
