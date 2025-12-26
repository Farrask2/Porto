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
  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // delay stagger (muncul satu-satu)
          entry.target.style.transitionDelay = `${index * 120}ms`;

          entry.target.classList.remove(
            "opacity-0",
            "translate-y-10",
            "scale-95"
          );

          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100"
          );

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
});
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff9c";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);
