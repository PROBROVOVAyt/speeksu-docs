document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-btn");
  const menu_btn = document.getElementById("close-menu-btn");
  const menu = document.getElementById("menu");

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
  menu_btn.addEventListener("click", function () {
    hideMenu();
  });
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
});
