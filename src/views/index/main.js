
const sliderFeaturesArtworks = new Swiper(".slider-features-artworks", {
    slidesPerView: 4,
    spaceBetween: 31,
    watchOverflow: false,
    navigation: {
        nextEl: '.slider-features-artworks__button-next',
        prevEl: '.slider-features-artworks__button-prev',
      },
});

const sliderRecentActivity = new Swiper(".slider-recent-activity", {
    slidesPerView: 3,
    spaceBetween: 31,
    watchOverflow: false,
    navigation: {
        nextEl: '.slider-recent-activity__button-next',
        prevEl: '.slider-recent-activity__button-prev',
      },
});
