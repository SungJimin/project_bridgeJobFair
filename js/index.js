// index.js
$(function () {

  //header>.top-menu Language Event 호버시 드랍 메뉴
  var $nav = $('ul.user-menu'),
    $navWrap = $('ul.user-menu .navWrap'),
    $gnb = $('ul.user-menu .gnb'),
    $lnb = $('ul.user-menu .lnb');

  $lnb.css('display', 'none');

  $gnb.mouseenter(function () {
    var dp = $(this).next().css('display');
    if (dp == 'none') {
      $lnb.slideUp();
      $(this).next().slideDown();
    }
  });

  $navWrap.mouseleave(function () {
    $lnb.slideUp();
  });

  // 참가기업 List(List 8개 이상일 때 마지막 요소에 클래스 추가하기)
  var $listWrap = $('.fairListWrap .fairList');
  
  $listWrap.each(function (index, item) {
    var list = $(item).children();
    if (list.length >= 8) {
      var last = list[7];
      $(last).addClass("last")
    }
  });
});

// function findLastList(){
//   let listWrap = $('');
//   let last
// }