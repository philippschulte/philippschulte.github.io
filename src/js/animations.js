$(document).ready(function() {

  /* ----- STICKY NAVIGATION -----*/
  $('.js-section-about').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },
  {
    offset: '45px'
  });

  /* ----- LINK BUTTON SCROLLING -----*/
  $('.js-scroll-to-about').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-about').offset().top
    }, 1000);
  });

  $('.js-scroll-to-process').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-process').offset().top
    }, 1000);
  });

  $('.js-scroll-to-projects').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-projects').offset().top
    }, 1000);
  });

  $('.js-scroll-to-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-contact').offset().top
    }, 1000);
  });

});
