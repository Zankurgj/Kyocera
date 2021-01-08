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
  $(document).on('click', function (e) {
    if ($(e.target).closest($('.signin-popup-wrapper')).length) return;
    $('#signinPopup').removeClass('signin-popup--show');
  });

  $('.product-card-btn').on('click', function (e) {
    $(this).toggleClass('product-card-btn--active');
  });

  $('.checkbox-input').on('change', function (e) {
    const allCheckbox = document.querySelectorAll('.checkbox-input');
    const clearFilterBtn = document.querySelector('#clearFilter');
    for (let i = 0; i <= allCheckbox.length; i++) {
      if (!allCheckbox[i].checked) {
        clearFilterBtn.classList.remove('show');
      } else {
        clearFilterBtn.classList.add('show');
        return;
      }
    }
  });
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
$('.product-slider-main').on(
  'afterChange',
  function (event, slick, currentSlide) {
    pauseAllProductVideo();
    if ($('.slick-current').hasClass('product-slide-main--video')) {
      $('.slick-current video').get(0).play();
    }
  }
);
const pauseAllProductVideo = () => {
  const allVideo = document.querySelectorAll('.product-slide-main-item-video');
  for (let i = 0; i < allVideo.length; i++) {
    allVideo[i].pause();
  }
};
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
const onShowSignIn = () => {
  document.querySelector('#signinPopup').classList.toggle('signin-popup--show');
};
const onToggleFilter = () => {
  document.querySelector('.catalog-sidebar-col').classList.toggle('show');
  document.querySelector('body').classList.toggle('body--no-scroll');
};

const onClearFilter = (el) => {
  const allCheckbox = document.querySelectorAll('.checkbox-input');
  for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].checked = false;
  }
  el.classList.remove('show');
};

const onSubmitFilter = () => {
  if (checkMobile()) {
    onToggleFilter();
  }
};

const checkMobile = () => {
  const mobileBp = 992;
  if (window.innerWidth <= mobileBp) {
    return true;
  }
  return false;
};

const onCheckSeries = (series) => {
  document.querySelector('.materials-model-container').classList.add('show');
};
const onCheckModel = (modelName) => {
  document
    .querySelector('.container-materials-reccomend')
    .classList.add('show');
  document.querySelector('#modelName').innerHTML = modelName;
};

const onToggleDelivery = (idTab) => {
  const allTabs = document.querySelectorAll('.order-form-delivery--js');
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove('show');
  }
  if (idTab === 'orderDelivery') {
    const deliveryBlocks = document.querySelectorAll(
      '.order-form-delivery-block--js'
    );
    for (let i = 0; i < deliveryBlocks.length; i++) {
      deliveryBlocks[i].classList.add('show');
    }
  } else {
    document.querySelector(`#orderPickup`).classList.add('show');
  }
};

const onShowPromocode = (el) => {
  el.classList.add('hide');
  console.log(el);
  document.querySelector('#basketPromocode').classList.add('show');
  document.querySelector('#promocode').focus();
};
