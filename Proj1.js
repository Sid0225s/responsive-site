burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightNav = document.querySelector(".rightNav");
navlist = document.querySelector(".navlist");

burger.addEventListener("click", () => {
  navlist.classList.toggle("v-classRes");
  rightNav.classList.toggle("v-classRes");
  navbar.classList.toggle("cutRes");
});
