document.addEventListener("DOMContentLoaded", () => {
  // Функция для применения темы
  function applyTheme() {
    const currentTheme = localStorage.getItem("theme");

    // Применяем тему в зависимости от настроек
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      // Меняем иконку на солнце (dark)
      document.getElementById("theme-icon").classList.remove("fa-moon");
      document.getElementById("theme-icon").classList.add("fa-sun");
    } else if (currentTheme === "light") {
      document.documentElement.classList.remove("dark");
      // Меняем иконку на луну (light)
      document.getElementById("theme-icon").classList.remove("fa-sun");
      document.getElementById("theme-icon").classList.add("fa-moon");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      // Меняем иконку на солнце (dark)
      document.getElementById("theme-icon").classList.remove("fa-moon");
      document.getElementById("theme-icon").classList.add("fa-sun");
    } else {
      document.documentElement.classList.remove("dark");
      // Меняем иконку на луну (light)
      document.getElementById("theme-icon").classList.remove("fa-sun");
      document.getElementById("theme-icon").classList.add("fa-moon");
    }
  }

  // Переключаем тему при клике
  const themeButton = document.getElementById("theme-btn");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const currentTheme = localStorage.getItem("theme");

      if (currentTheme === "dark") {
        localStorage.setItem("theme", "light");
      } else if (currentTheme === "light") {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "dark"); // Если нет сохранённой темы, по умолчанию тёмная
      }

      applyTheme();
    });
  }

  // Применить тему при загрузке страницы
  applyTheme();
});
