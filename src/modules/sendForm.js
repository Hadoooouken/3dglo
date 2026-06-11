export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const loader = document.getElementById('loader');

  const showLoader = () => {
    loader.classList.remove('hidden');
  };

  const hideLoader = () => {
    loader.classList.add('hidden');
  };

  const clearForm = (formElements) => {
    form.reset();

    formElements.forEach((input) => {
      input.classList.remove('success', 'error');
    });
  };

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (!input.classList.contains('success')) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    });
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      showLoader();
      sendData(formBody)
        .then((data) => {
          console.log(data);
          clearForm(formElements);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          hideLoader();
        });
    } else {
      alert('Данные заполнены неверно');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму');
    }
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
