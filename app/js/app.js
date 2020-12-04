document.addEventListener('DOMContentLoaded', function () {});

$('#mainSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: true,
  prevArrow: $('.slider-arrow--main-prew'),
  nextArrow: $('.slider-arrow--main-next'),
  customPaging: function (slider, i) {
    return `<button class="main-slider-pagin"><span class="visually-hidden">Слайд ${
      i + 1
    }</span></button>`;
  },
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       dots: false,
  //       slidesToShow: 1,
  //       arrows: false,
  //     },
  //   },
  // ],
});

$('.product-slider').slick({
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  variableWidth: true,
  // prevArrow: $('.slider-arrow--product-prew'),
  // nextArrow: $('.slider-arrow--product-next'),
});

$('#newsSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  // prevArrow: $('.slider-arrow--product-prew'),
  // nextArrow: $('.slider-arrow--product-next'),
});

const onShowTab = (el, id) => {
  const tab = document.querySelector(id);
  const tabName = el.getAttribute('name');
  const tabsByName = document.querySelectorAll(`[data-tab-name="${tabName}"]`);
  for (const tabByName of tabsByName) {
    tabByName.classList.remove('tab-item--show');
  }
  tab.classList.add('tab-item--show');
  if (tabName === 'product-nav') {
    $('#productSlider').slick('refresh');
    $('#productSliderNew').slick('refresh');
    $('#productSliderSpecial').slick('refresh');
  }
};
