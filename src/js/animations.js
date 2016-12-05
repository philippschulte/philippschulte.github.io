$(document).ready(function() {

  /* ----- TYPED HEADING -----*/
  typer('h1', 100)
    .pause(500)
    .line('Hi I\'m Philipp Schulte.')
    .back(9, 100)
    .continue('.')
    .pause(1000)
    .line('I build full-stack Web and Mobile apps.')
    .run(function() {
      $('.hero-text-box-buttons').fadeIn('slow');
    });

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

  $('.js-scroll-to-work').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-work').offset().top
    }, 1000);
  });

  $('.js-scroll-to-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-contact').offset().top
    }, 1000);
  });

  /* ----- ANIMATIONS ON SCROLL -----*/
  $('.js-wp-about').waypoint(function(direction) {
    $('.js-wp-about').addClass('animated fadeIn');
  },
  {
    offset: '50%'
  });

});
