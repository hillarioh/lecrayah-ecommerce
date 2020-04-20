const hamburger = document.querySelector(".ham-ic");
const nav3 = document.querySelector(".nav3");
const links = document.querySelectorAll(".nav3 li");

hamburger.addEventListener("click", () => {
  nav3.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
