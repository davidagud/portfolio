$('#home-menu-item').click(function() {
    $('#home-menu-item').addClass('home-menu-active');
    $('#about-menu-item').removeClass('about-menu-active');
    $('#work-menu-item').removeClass('work-menu-active');
    $('#contact-menu-item').removeClass('contact-menu-active');
});

$('#about-menu-item').click(function() {
    $('#home-menu-item').removeClass('home-menu-active');
    $('#about-menu-item').addClass('about-menu-active');
    $('#work-menu-item').removeClass('work-menu-active');
    $('#contact-menu-item').removeClass('contact-menu-active');
});

$('#work-menu-item').click(function() {
    $('#home-menu-item').removeClass('home-menu-active');
    $('#about-menu-item').removeClass('about-menu-active');
    $('#work-menu-item').addClass('work-menu-active');
    $('#contact-menu-item').removeClass('contact-menu-active');
});

$('#contact-menu-item').click(function() {
    $('#home-menu-item').removeClass('home-menu-active');
    $('#about-menu-item').removeClass('about-menu-active');
    $('#work-menu-item').removeClass('work-menu-active');
    $('#contact-menu-item').addClass('contact-menu-active');
});

$('#view-work-button').click(function() {
    $('#home-menu-item').removeClass('home-menu-active');
    $('#about-menu-item').removeClass('about-menu-active');
    $('#work-menu-item').addClass('work-menu-active');
    $('#contact-menu-item').removeClass('contact-menu-active');
});

$('.project-box').hover(function() {
    $(this).children('.hover-info').toggleClass('hidden');
});