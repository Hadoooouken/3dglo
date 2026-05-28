export const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');

  const openMenu = () => {
    menu.classList.add('active-menu');
  };
  const closeMenu = () => {
    menu.classList.remove('active-menu');
  };

  const handleMenu = (evt) => {
    if (evt.target.classList.contains('close-btn')) {
      closeMenu();
    }
    if (evt.target.closest('a')) {
      closeMenu();
    }
    if (evt.target === menu) {
        closeMenu();
    }
  };

  menuBtn.addEventListener('click', openMenu);

  menu.addEventListener('click', handleMenu);
};
