$(document).ready(function(){
    $('.header').on('mouseleave', function(){
        $('.gnb .gnb__depth').stop().slideUp();
    })
    $('.gnb .gnb__link').on('mouseenter', function(){
        $('.gnb .gnb__depth').stop().slideUp();
        $(this).siblings('.gnb__depth').stop().slideDown();
    })

    $('.mobile-gnb .gnb__link:not(".link")').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('js-active').siblings('.gnb__depth').stop().slideToggle();
    });
    $('.mobile-gnb-button').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('js-active');
        $('.mobile-menu').toggle();
    })
})