var swiper = new Swiper(".index-banner-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".index-banner-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".index-banner-swiper-button-next",
    prevEl: ".index-banner-swiper-button-prev",
  },
});


var swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews-swiper-button-next",
    prevEl: ".reviews-swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});


var swiper = new Swiper(".index-products-swiper-1", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".index-products-swiper-pagination-1",
    clickable: true,
  },
  navigation: {
    nextEl: ".index-products-swiper-button-next-1",
    prevEl: ".index-products-swiper-button-prev-1",
  },
  breakpoints: {
    768: {
      spaceBetween: 16,
    }
  }
});

var swiper = new Swiper(".index-products-swiper-2", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".index-products-swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".index-products-swiper-button-next-2",
    prevEl: ".index-products-swiper-button-prev-2",
  },
  breakpoints: {
    768: {
      spaceBetween: 16,
    }
  }
});