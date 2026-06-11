import './css/bootstrap.min.css';
import './css/style.min.css'; // добавьте импорт главного файла стилей
import { validation } from './modules/validation';
import { menu } from './modules/menu';
import { modal } from './modules/modal';
import { smothScroll } from './modules/smothScroll';
import { timer } from './modules/timer';
import { tabs } from './modules/tabs';
import { slider } from './modules/slider';
import { calculator } from './modules/calculator';
import { sendForm } from './modules/sendForm';

timer('20 june 2026');
menu();
modal();
smothScroll();
validation();
tabs();

slider({
  slider: '.portfolio-content',
  slide: '.portfolio-item',
  dotsList: '.portfolio-dots',

  activeSlide: 'portfolio-item-active',
  activeDot: 'dot-active',

  dotClass: 'dot',
  btn: 'portfolio-btn',
  nextBtn: 'next',
  prevBtn: 'prev',
});

calculator(100);

sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'input',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'input',
      id: 'total',
    },
  ],
});
