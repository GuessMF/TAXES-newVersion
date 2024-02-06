const openMenuBtn = document.querySelector(".open-mobile-menu__btn");
const closeMenuBtn = document.querySelector(".close-mobile-menu__btn");
const mobileNav = document.querySelector(".mobile__nav");
openMenuBtn.addEventListener("click", () => {
  console.log("open");
  mobileNav.style.transform = "translateY(0)";
  document.documentElement.style.overflow = "hidden";
});
closeMenuBtn.addEventListener("click", () => {
  console.log("open");
  mobileNav.style.transform = "translateY(-150%)";
  document.documentElement.style.overflow = "inherit";
});
