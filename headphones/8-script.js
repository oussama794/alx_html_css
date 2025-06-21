document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.querySelector(".nav__menu");
  const close = document.getElementById("nav-close");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("open");
  });
});
