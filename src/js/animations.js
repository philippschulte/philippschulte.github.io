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
  onClickScrollingToSection('.js-scroll-to-about', '.js-section-about');
  onClickScrollingToSection('.js-scroll-to-process', '.js-section-process');
  onClickScrollingToSection('.js-scroll-to-work', '.js-section-work');
  onClickScrollingToSection('.js-scroll-to-contact', '.js-section-contact');

  /* ----- ANIMATIONS ON SCROLL -----*/
  animateOnScroll('.js-wp-about', 'fadeIn');
  animateOnScroll('.js-wp-process', 'pulse');
  animateOnScroll('.js-wp-testimonials', 'bounce');
  animateOnScroll('.js-wp-tools', 'fadeIn');
  animateOnScroll('.js-wp-work', 'pulse');

});

/* ----- HELPER FUNCTIONS -----*/
function onClickScrollingToSection(button, section) {
  $(button).click(function() {
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1000);
  });
}

function animateOnScroll(waypoint, animation, offset) {
  $(waypoint).waypoint(function(direction) {
    $(waypoint).addClass('animated' + ' ' + animation);
  },
  {
    offset: '50%'
  });
}
