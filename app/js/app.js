document.addEventListener('DOMContentLoaded', function () {
  $('.catalog-range').slider({
    range: true,
    min: 0,
    max: 100,
    values: [18, 45],
    slide: function (event, ui) {
      $('#firstVal').val(ui.values[0]);
      $('#nextVal').val(ui.values[1]);
    },
  });
  $('#firstVal').val($('.catalog-range').slider('values', 0));
  $('#nextVal').val($('.catalog-range').slider('values', 1));

  setActiveTab();
});

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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  // prevArrow: $('.slider-arrow--product-prew'),
  // nextArrow: $('.slider-arrow--product-next'),
});

$('.product-slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-slider-nav',
});

$('.product-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-slider-main',
  focusOnSelect: true,
  variableWidth: true,
});

const onShowTab = (el) => {
  const tabId = el.getAttribute('tabId');
  const tab = document.querySelector(tabId);
  const tabName = el.getAttribute('name');
  const tabsByName = document.querySelectorAll(`[data-tab-name="${tabName}"]`);
  for (const tabByName of tabsByName) {
    tabByName.classList.remove('tab-item--show');
  }
  tab.classList.add('tab-item--show');
};

const setActiveTab = () => {
  const tabInputs = document.querySelectorAll('.js-tab-input');
  for (const tabInput of tabInputs) {
    if (tabInput.checked) {
      onShowTab(tabInput);
      return;
    }
  }
};

const onCounterMinus = (id) => {
  let val = getCounterVal(id);
  if (val > 0) {
    --val;
  }
  setCounterVal(id, val);
};
const onCounterPlus = (id) => {
  let val = getCounterVal(id);
  ++val;
  setCounterVal(id, val);
};
const getCounterVal = (id) => {
  return document.getElementById(id).value;
};
const setCounterVal = (id, val) => {
  document.getElementById(id).value = val;
};

const onShowSearch = () => {
  document
    .querySelector('.header-search-inpit-wrapper')
    .classList.toggle('show-search');
};

const onShowSubMenu = () => {
  document
    .querySelector('.main-header-nav-dropdown-inner')
    .classList.toggle('show');
};

const onToggleMobileMenu = () => {
  document.querySelector('.main-header-bottom').classList.toggle('show');
  document.querySelector('body').classList.toggle('body--no-scroll');
};
