export const validation = () => {
  const allInputs = document.querySelectorAll('input');

  const checkStatus = (element, regExp, extraCheck = true) => {
    const value = element.value;

    const isValid = regExp.test(value) && extraCheck;

    element.classList.toggle('success', isValid);
    element.classList.toggle('error', !isValid);
  };

  allInputs.forEach((input) => {
    const inputType = input.getAttribute('type');

    if (input.classList.contains('mess')) {
      const regExp = /^[а-яА-ЯёЁ0-9\s.,!?;:"'()-]+$/;
      input.addEventListener('input', (evt) => {
        checkStatus(input, regExp);
      });
    }

    if (inputType === 'email') {
      input.addEventListener('input', (evt) => {
        const regExp = /^[a-zA-Z0-9@\-_.!~*']+$/;

        checkStatus(input, regExp);
      });
    }

    if (inputType === 'tel') {
      input.addEventListener('input', (evt) => {
        const regExp = /^[0-9\()\-+]+$/;

        checkStatus(input, regExp, input.value.length >= 11);
      });
    }

    if (input.getAttribute('name') === 'user_name') {
      input.addEventListener('input', (evt) => {
        const regExp = /^[а-яА-ЯёЁ\s]+$/;

        checkStatus(input, regExp);
      });
    }

    if (input.classList.contains('calc-item')) {
      input.addEventListener('input', (evt) => {
        evt.target.value = evt.target.value.replace(/\D/g, '');
      });
    }
  });
};
