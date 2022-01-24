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

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.partners-slider_ltr', {
        pagination: false,
        arrows: false,
        type: 'loop',
        direction: 'rtl',
        autoWidth: true,
        fixedHeight: '61px',
        autoplay: true,
        interval: 1,
        speed: 1200,
        pauseOnHover: true,
    } );
    splide.mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.partners-slider_rtl', {
        pagination: false,
        arrows: false,
        type: 'loop',
        direction: 'ltr',
        autoWidth: true,
        fixedHeight: '61px',
        autoplay: true,
        interval: 1,
        speed: 1200,
        pauseOnHover: true,
    } );
    splide.mount();
  } );