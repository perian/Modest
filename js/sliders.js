'use strict';
$(document).ready(function(){
  $('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });

  $('.trend-slider').slick({
    dots: true,
    arrows: false,
  });
  $('.blog-slider').slick();
});
