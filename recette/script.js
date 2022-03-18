const start = document.querySelector("#button");
const popup = document.querySelector(".popup");

start.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});
