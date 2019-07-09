$('#carousel').on('slide.bs.carousel', function(e) {
    if (e.to === 0) {
        $('#home-menu-item').addClass('home-menu-active');
        $('#about-menu-item').removeClass('about-menu-active');
        $('#work-menu-item').removeClass('work-menu-active');
        $('#contact-menu-item').removeClass('contact-menu-active');
        $('.carousel-control-prev-icon, .carousel-control-next-icon').removeClass('carousel-icon-invert');
    }

    if (e.to === 1) {
        $('#home-menu-item').removeClass('home-menu-active');
        $('#about-menu-item').addClass('about-menu-active');
        $('#work-menu-item').removeClass('work-menu-active');
        $('#contact-menu-item').removeClass('contact-menu-active');
        $('.carousel-control-prev-icon, .carousel-control-next-icon').addClass('carousel-icon-invert');
    }

    if (e.to === 2) {
        $('#home-menu-item').removeClass('home-menu-active');
        $('#about-menu-item').removeClass('about-menu-active');
        $('#work-menu-item').addClass('work-menu-active');
        $('#contact-menu-item').removeClass('contact-menu-active');
        $('.carousel-control-prev-icon, .carousel-control-next-icon').addClass('carousel-icon-invert');
    }

    if (e.to === 3) {
        $('#home-menu-item').removeClass('home-menu-active');
        $('#about-menu-item').removeClass('about-menu-active');
        $('#work-menu-item').removeClass('work-menu-active');
        $('#contact-menu-item').addClass('contact-menu-active');
        $('.carousel-control-prev-icon, .carousel-control-next-icon').addClass('carousel-icon-invert');
    }
});

$('.project-column').hover(function() {
    $(this).children('#overlay').toggleClass('hidden');
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

function getRatio() {
    if ($(window).height() > $(window).width()) {
        $('.cover').removeClass('rotate');
        $('.portfolio').addClass('rotate');
        console.log('rotate');
    } else {
        $('.cover').addClass('rotate');
        $('.portfolio').removeClass('rotate');
    }
}

getRatio();

var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

$(window).resize(function () {
    waitForFinalEvent(function(){
        getRatio();
    }, 50, "some unique string");
});