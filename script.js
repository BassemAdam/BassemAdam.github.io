AOS.init();
$(document).ready(function(){
    var carousel = $('.owl-carousel');
    carousel.owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        startPosition: carousel.children().length / 2 - 1,
        responsive:{
            600:{
                items:3
            }
        }
    });
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('navbar-scrolled');
    } else {
        $('.navbar').removeClass('navbar-scrolled');
    }
});