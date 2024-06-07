AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 800,
    once: true,
});

const swiperOurClients = new Swiper('.swiper--our-clients', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,

    slidesPerView: 1,

    breakpoints: {
        1300: {
            slidesPerView: 3,
        },
        850: {
            slidesPerView: 2,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
