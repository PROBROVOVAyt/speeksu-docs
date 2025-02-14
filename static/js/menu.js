document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const themeToggle = document.getElementById("theme-toggle");

  // Функция для скрытия меню
  function hideMenu() {
    console.log("Меню скрыто");
    menu.classList.add("hidden");
  }

  // Функция для показа меню
  function showMenu() {
    console.log("Меню показано");
    menu.classList.remove("hidden");
  }

  // Проверка ширины экрана
  function checkScreenWidth() {
    console.log("Ширина экрана:", window.innerWidth);
    if (window.innerWidth <= 1024) {
      hideMenu();
    } else {
      showMenu();
    }
  }

  // Проверка при загрузке страницы
  checkScreenWidth();

  // Обработчик клика на кнопку
  btn.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  // Обработка изменения размера экрана
  window.addEventListener("resize", function () {
    checkScreenWidth();
  });

  // Проверка системной темы
  function setThemeBasedOnSystem() {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkScheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Переключатель темы
  themeToggle.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  // Установка темы при загрузке
  setThemeBasedOnSystem();
});
