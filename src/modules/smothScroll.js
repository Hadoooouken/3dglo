export const smothScroll = () => {
  const serviceBlock = document.querySelector('#service-block');

  const serviceBtn = document.querySelector('a');

  serviceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    serviceBlock.scrollIntoView({ behavior: 'smooth' });
  });
};
