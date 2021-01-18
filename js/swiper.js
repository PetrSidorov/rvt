var swiper = new Swiper('.swiper-container', {

    // Default parameters
    slidesPerView: 1.15,
    spaceBetween: 16,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.15,
        spaceBetween: 16
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: false

      }

    }
  });