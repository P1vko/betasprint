document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.team-slider', {
        pagination: false,
        arrows: false,
        autoWidth: true,
        waitForTransition: false,
    } );
    splide.mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.feedback-slider', {
        pagination: false,
        arrows: false,
        type: 'loop',
    } );
    splide.mount();
  } );