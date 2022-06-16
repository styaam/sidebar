const sideBarElement = document.querySelector("#sideBar");
const buttonElement = document.querySelector("#button");
const containerElement = document.querySelector("#container");
const bodyElement = document.querySelector("body");

buttonElement.addEventListener("click", function () {
  sideBarElement.classList.toggle("active");
  containerElement.classList.toggle("open");
  bodyElement.classList.toggle("open");
});
