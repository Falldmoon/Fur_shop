$(document).ready(function () {
  $('.instagram-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    prevArrow: $('#instagram_l'),
    nextArrow: $('#instagram_r'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
    ]
  })
  $('.products-row').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
  })
  $('.header-menu').on('click', function() {
    let menu = $('.modal-menu')[0]
    $(menu).addClass('modal-menu_active')
  })
  $('.modal-menu__exit').on('click', function() {
    let menu = $('.modal-menu')[0]
    $(menu).removeClass('modal-menu_active')
  })
  $('.product-slider').slick({
    vertical: true,
    arrows: true,
    swipe: false,
    slidesToShow: 3,
    asNavFor: '.product-photo',
    focusOnSelect: true,
    prevArrow: $('.products-arrows__up'),
    nextArrow: $('.products-arrows__bottom')
  })
  $('.product-photo').slick({
    vertical: true,
    slidesToShow: 1,
    arrows: false,
    swipe: false,
    asNavFor: '.product-slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          swipe: true,
        }
      },
    ]
  })
  $('.articles-mobile').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
  })
  $('.col-slider').slick({
  	slidesToShow: 3,
  	prevArrow: $('#instagram_l_c'),
  	nextArrow: $('#instagram_r_c'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
  })
  $('.about-slider').slick({
    prevArrow: $('.arrow__slider_l'),
    swipe: false,
    nextArrow: $('.arrow__slider_r')
  })
  $('.selectize-input').on('click', function() {
    alert(element)
    let element = $(window).scrollTop()
    $(window).scrollTop(element)
  })
  $('.option-color').on('click', function() {
      for (let i = $('.option-color').length - 1; i >= 0; i--) {
        if ($('.option-color')[i] != this) {
          let element = $('.option-color')[i]
          $(element).removeClass('option__active');
        }
        else{
          let element = $('.option-color')[i]
          $(element).addClass('option__active');
        }
      }
  })
  $('.header-search').on('click', function() {
    $('.header').addClass('header-search__active')
  })
  $('.catalog-sort__element').on('click', function() {
      if ($(this).hasClass('catalog-sort__element_active')) {
        $(this).removeClass('catalog-sort__element_active')
      }
      else{
        $(this).addClass('catalog-sort__element_active')
      }
  })
  let arr_slider = $('.about-slider img')
  let slider_counter = 0
  for (let i = $('.about-slider img').length - 1; i >= 0; i--) {
    slider_counter += 1
  }
  slider_counter = (slider_counter-1) / 2
  let element_slide = $('#slider__counter')[0]
  element_slide.innerHTML= slider_counter;
  $('.arrow__slider_r').on('click', function() {
    let element_now = $('#element_now')[0]
    let count_now = element_now.innerHTML  
    count_now = parseInt(count_now)
    if (count_now != slider_counter) {
        count_now += 1
        $(element_now)[0].innerHTML = count_now + '/'
    }
    else{
      $(element_now)[0].innerHTML = 1 + '/'
    }
  })
  $('.arrow__slider_l').on('click', function() {
    let element_now = $('#element_now')[0]
    let count_now = element_now.innerHTML  
    count_now = parseInt(count_now)
    if (count_now != 1) {
      count_now -= 1
      element_now.innerHTML = count_now + '/'
    }
    else{
      element_now.innerHTML = slider_counter + '/'
    }
  })
})

$('#catalog-sort__select').selectize({
  
});