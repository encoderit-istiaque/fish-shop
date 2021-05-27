jQuery(document).ready(function() {
  jQuery('.homepage_slider').slick({
      arrows: true,
      dots: false,
      autoplay: true,
  });
  jQuery('.homepage_slider').on('beforeChange', function(event, slick, currentSlide) {
      jQuery(".overlay_circle_slider").hide();
      jQuery(".overlay_text_slider").hide();
  });
  jQuery('.homepage_slider').on('afterChange', function(event, slick, currentSlide) {
      jQuery(".overlay_circle_slider").fadeIn();
      jQuery(".overlay_text_slider").slideDown(1000);
      // jQuery(".overlay_circle_slider").animate({
      //     width: '423px',
      //     height: '423px'
      // }, 500);
  });
  jQuery('.testimonial_slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
  });
});