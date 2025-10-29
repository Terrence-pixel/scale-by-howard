// Vanilla JS for toggling menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navi-bar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
