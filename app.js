// Открытие и закрытие бургер меню
toggleMenu('.BurgerMenuButton', '.menuList');

// Переходы и возвраты для подменю
openSubMenu('women', '.mainMenu', '.womenMenu');
closeSubMenu('womenBack', '.mainMenu', '.womenMenu');

openSubMenu('men', '.mainMenu', '.menMenu');
closeSubMenu('menBack', '.mainMenu', '.menMenu');

openSubMenu('gifts', '.mainMenu', '.giftsMenu');
closeSubMenu('giftsBack', '.mainMenu', '.giftsMenu');

openSubMenu('explore', '.mainMenu', '.exploreMenu');
closeSubMenu('exploreBack', '.mainMenu', '.exploreMenu');

// Управление высотой подменю
toggleHeight('.openUL');
// Функция для открытия и закрытия меню
function toggleMenu(buttonClass, menuClass) {
  document.querySelector(buttonClass).addEventListener("click", function() {
    document.querySelector(menuClass).classList.toggle("open");
  });
}

// Функция для перехода в подменю
function openSubMenu(triggerId, mainMenuClass, subMenuClass) {
  document.getElementById(triggerId).addEventListener("click", function() {
    const mainMenu = document.querySelector(mainMenuClass);
    const subMenu = document.querySelector(subMenuClass);
    mainMenu.style.left = "-100vw";
    subMenu.style.left = "0";
  });
}

// Функция для возврата из подменю
function closeSubMenu(triggerId, mainMenuClass, subMenuClass) {
  document.getElementById(triggerId).addEventListener("click", function() {
    const mainMenu = document.querySelector(mainMenuClass);
    const subMenu = document.querySelector(subMenuClass);
    mainMenu.style.left = "0";
    subMenu.style.left = "100vw";
  });
}

// Управление высотой подменю
function toggleHeight(menuItemsClass, expandedHeight = '320px', collapsedHeight = '60px') {
  const menuItems = document.querySelectorAll(menuItemsClass);
  menuItems.forEach((item) => {
    item.addEventListener('click', function() {
      const currentHeight = this.style.height === expandedHeight ? collapsedHeight : expandedHeight;
      this.style.height = currentHeight;
    });
  });
}

// Выбираем все элементы с классом .openUL
const imgItems = document.querySelectorAll('.openUL');

imgItems.forEach((item) => {
  let flipped = false;  // Теперь переменная отслеживает состояние переворота для каждого элемента
  item.addEventListener('click', function() {
    const img = this.querySelector('img');
    if (img) {
      flipped = !flipped;
      img.style.transform = flipped ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
    }
  });
});
// Выбираем картинку внутри кнопки
const burgerImage = document.getElementById('burgerImage');

// Добавляем обработчик клика на родительский div
document.querySelector('.BurgerMenuButton').addEventListener('click', function() {
  // Меняем картинку при клике
  if (burgerImage.src.includes('burger-bar.png')) {
    burgerImage.src = 'images/close.png';  // Новая картинка
  } else {
    burgerImage.src = 'images/burger-bar.png';  // Возврат к старой картинке
  }
});