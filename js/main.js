$(function(){

  $('.slider-top__inner').slick({

    arrows: false,
    dots: true,
    autoplay: true

  });

  $('.partners__slider').slick({

    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,

  });

  const mixin1 = document.querySelector('.products__items'); 
  const mixin2 = document.querySelector('.design__items'); 

  if (mixin1) {
    mixitup('.products__items', {
      selectors: {
        control: '.filter'
      }
    })
  }

  if (mixin1) {
    mixitup('.design__items', {
      selectors: {
        control: '.filter2'
      }
    })
  }
  
});