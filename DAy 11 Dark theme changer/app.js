let body = document.querySelector("body");
let check = document.querySelector("#check");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

moon.classList.remove("moon");
moon.classList.add();
check.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList != "dark") {
    sun.classList.remove("sun");
    moon.classList.add("moon");
  } else {
    sun.classList.add("sun");
    moon.classList.remove("moon");
  }
});
