import { animate } from './helpers';

export const modal = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popupCloseBtn = popup.querySelector('.popup-close');

  const closePopup = () => {
    popup.style.display = 'none';
  };

  popupBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'block';
      animate({
        duration: 400,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2) * ((20 + 1) * timeFraction - 20);
        },
        draw(progress) {
          const x = -100 + 100 * progress;
          popupContent.style.transform = `translateX(${x}px)`;
        },
      });
    });
  });

  popup.addEventListener('click', (evt) => {
    if (evt.target.closest('.popup-close') || evt.target === popup) {
      closePopup();
    }
  });
};
