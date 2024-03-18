AOS.init();
$(document).ready(function(){
    var carousel = $('.owl-carousel');
    carousel.owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        startPosition: carousel.children().length / 2 - 1,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
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
