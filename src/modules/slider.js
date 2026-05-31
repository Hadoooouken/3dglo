export const slider = (config) => {
const {
  slider,
  slide,
  dotsList,
  activeSlide = 'slide-active',
  activeDot = 'dot-active',
  dotClass,     
  btn,
  nextBtn,
  prevBtn
} = config;
  console.log(prevBtn);
  const sliderBlock = document.querySelector(slider);
  if (!sliderBlock) return;

  const slides = document.querySelectorAll(slide);
  if (!slides.length) return;

  const dotsContainer  = document.querySelector(dotsList);
  if (!dotsContainer) return;

  let currentSlide = 0;
  let interval;

  slides.forEach((slide) => {
    const dot = document.createElement('li');
    dot.classList.add(dotClass);
    console.log(dot);
    dotsContainer.append(dot);
  });

  const dots = dotsContainer.querySelectorAll(`.${dotClass}`);

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlide);
    prevSlide(dots, currentSlide, activeDot);

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, activeSlide);
    nextSlide(dots, currentSlide, activeDot);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(() => {
      autoSlide();
    }, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(`.${dotClass}, .${btn}`)) {
      return;
    }
    prevSlide(slides, currentSlide, activeSlide);
    prevSlide(dots, currentSlide, activeDot);

    if (e.target.classList.contains(nextBtn)) {
      currentSlide++;
    } else if (e.target.classList.contains(prevBtn)) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, activeSlide);
    nextSlide(dots, currentSlide, activeDot);
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches(`.${dotClass}, .${btn}`)) {
        stopSlide();
      }
    },
    true,
  );
  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches(`.${dotClass}, .${btn}`)) {
        startSlide(2000);
      }
    },
    true,
  );

  startSlide(2000);
};
