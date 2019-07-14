import $ from "jquery";

$(".testimonial-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
});

$(".event-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
});

$(".event-gallery-image-a").on("click", slickGoTo);

function slickGoTo() {
    const index = $(this).data("index");
    $(".event-carousel").slick('slickGoTo', index);
    $('html, body').animate({
        scrollTop: $(".event-carousel").offset().top
    }, 800);
}
