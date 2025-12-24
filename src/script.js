document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
 function toggleResume() {
    const menu = document.getElementById("resumeMenu");
    const arrow = document.getElementById("arrow");

    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  }
  