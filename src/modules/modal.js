export const modal = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popupCloseBtn = popup.querySelector('.popup-close');

  let position;
  let animationId;

  const animation = () => {
    position += 10;

    popupContent.style.transform = `translateX(${position}px)`;

    if (position < -50) {
      animationId = requestAnimationFrame(animation);
    }
  };

  const closePopup = () => {
    cancelAnimationFrame(animationId);

    popup.style.display = 'none';

    popupContent.style.transform = 'translateX(-50px)';
  };

  popupBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth > 700) {
        position = -500;
        animation();
      }
      popup.style.display = 'block';
    });
  });

  popup.addEventListener('click', (evt) => {
    if (evt.target.closest('.popup-close') || evt.target === popup) {
      closePopup();
    }
  });
};
