const sidebar = document.getElementById("sideBar");

const ye = function () {
  document.getElementById("sideBar").style.width = "200px";
};

const back = function () {
  document.getElementById("sideBar").style.width = "75px";
};

const pand = function () {
  if (document.getElementById("sideBar").style.width === "200px") {
    document.getElementById("sideBar").style.width = "75px";
  } else {
    document.getElementById("sideBar").style.width = "200px";
  }
};
