export const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.querySelector('#total');

  let intervalId;

  const animateCounter = (num, elem) => {
    clearInterval(intervalId);

    let n = +elem.textContent || 0;

    intervalId = setInterval(() => {
      n += Math.ceil((num - n) / 10);

      if (n >= num) {
        n = num;
        clearInterval(intervalId);
      }

      elem.textContent = n;
    }, 10);
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (+calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (+calcDay.value && +calcDay.value < 5) {
      calcDayValue = 2;
    } else if (+calcDay.value && +calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    }

    animateCounter(totalValue, total);
  };

  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};
