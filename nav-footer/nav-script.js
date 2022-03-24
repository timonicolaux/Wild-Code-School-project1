const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navBar = document.querySelector(".navbar");
let menuOpen = false;

const carousselImg = document.querySelector(".slideshow-container");

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("show-nav");
  carousselImg.classList.toggle("hide-caroussel");

  if (!menuOpen) {
    toggleButton.classList.add("open");
    menuOpen = true;
  } else {
    toggleButton.classList.remove("open");
    menuOpen = false;
  }
});
