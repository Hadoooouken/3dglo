export const validation = () => {
  const allInputs = document.querySelectorAll('input');

  allInputs.forEach((input) => {
    const inputType = input.getAttribute('type');

    if (input.classList.contains('mess')) {
      input.addEventListener('input', (evt) => {
        evt.target.value = evt.target.value.replace(/[^а-яА-Я\- ]/g, '');
      });
    }

    if (inputType === 'email') {
      input.addEventListener('input', (evt) => {
        evt.target.value = evt.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
      });
    }

    if (inputType === 'tel') {
      input.addEventListener('input', (evt) => {
        evt.target.value = evt.target.value.replace(/[^0-9\()\-]/g, '');
      });
    }

    if (input.classList.contains('calc-item')) {
      input.addEventListener('input', (evt) => {
        evt.target.value = evt.target.value.replace(/\D/g, '');
      });
    }
  });
};
