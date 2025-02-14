document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("language-btn");
  const menu = document.getElementById("lang-dropdown");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
