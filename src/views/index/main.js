
const sliderFeaturesArtworks = new Swiper(".slider-features-artworks", {
    slidesPerView: 1,
    spaceBetween: 31,
    watchOverflow: false,
    breakpoints: {
      992.78: {
        slidesPerView: 4,
      },
      768.78: {
        slidesPerView: 3,
      },
      576.78: {
        slidesPerView: 2,
      },
    },
    navigation: {
        nextEl: '.slider-features-artworks__button-next',
        prevEl: '.slider-features-artworks__button-prev',
      },
});

const sliderRecentActivity = new Swiper(".slider-recent-activity", {
    slidesPerView: 1,
    spaceBetween: 31,
    watchOverflow: false,
    breakpoints: {
      992.78: {
        slidesPerView: 3,
      },
      576.78: {
        slidesPerView: 2,
      },
    },
    navigation: {
        nextEl: '.slider-recent-activity__button-next',
        prevEl: '.slider-recent-activity__button-prev',
      },
});
