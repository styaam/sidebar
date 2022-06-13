const sideBar = document.querySelector(".sideBar");
const extBar = document.querySelector(".extBar");
const span = document.querySelector("span");
const x = document.querySelector(".x");
const classes = span.classList;

x.addEventListener("click", function () {
  classes.toggle("sideBar");
});
