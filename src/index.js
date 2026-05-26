import './css/bootstrap.min.css';
import './css/style.min.css'; // добавьте импорт главного файла стилей
import { calculator, validation } from './modules/validation';
import { menu } from './modules/menu';
import { modal } from './modules/modal';
import { smothScroll } from './modules/smothScroll';
import { timer } from './modules/timer';

timer('26 may 2026');
menu();
modal();
smothScroll();
validation()
