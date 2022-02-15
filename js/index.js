// index.js
$(function(){

    //MAin Content 슬라이딩 배너
    var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 2000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    //header>.top-menu Language Event 호버시 드랍 메뉴
    var $nav = $('ul.user-menu'),
    $navWrap = $('ul.user-menu .navWrap'),
        $gnb = $('ul.user-menu .gnb'),
        $lnb = $('ul.user-menu .lnb');

    $lnb.css('display','none');

    $gnb.mouseenter(function(){
        var dp = $(this).next().css('display');
        if(dp == 'none'){
            $lnb.slideUp();
            $(this).next().slideDown();
        }
    });

    $navWrap.mouseleave(function(){
        $lnb.slideUp();
    });

});
