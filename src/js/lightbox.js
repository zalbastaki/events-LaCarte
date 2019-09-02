import $ from "jquery";

$(".lightbox-carousel").slick({
    autoplay: false,
    adaptiveHeight: true,
});

$(".event-gallery-image-a").on("click", slickGoTo);

function slickGoTo() {
    const index = $(this).data("index");
    $(".lightbox-carousel").slick("slickGoTo", index);
    $(".lightbox").addClass("show");
}

$(".lightbox-close-button").on("click", closeLightbox);
$(".lightbox").on("click", closeLightbox);

function closeLightbox(event) {
    if (event.target === this || event.target === this.querySelector('i')) {
        $(".lightbox").removeClass("show");
    }
}