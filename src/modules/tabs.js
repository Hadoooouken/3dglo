export const tabs = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  tabPanel.addEventListener('click', (evt) => {
    if (evt.target.closest('.service-header-tab')) {
      const tabBtn = evt.target.closest('.service-header-tab');

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          console.log('показан', tabContent[index]);
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          console.log('спрятан', tabContent[index]);
          tabContent[index].classList.add('d-none');
        }
      });
    }
  });
};
