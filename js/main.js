const filterBox = document.querySelectorAll('.swiper-wrapper .swiper-slide');
const list = document.querySelector('.trend__list');

var swiper = new Swiper('.gallery-thumbs', {
  spaceBetween: 30,
  slidesPerColumn: 2,
  slidesPerView: 6,
  slidesPerGroup: 1,
  slidesPerColumnFill: "row",
  updateOnWindowResize: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    780: {
      slidesPerView: 2
    },
    980: {
      slidesPerView: 3
    },
    1250: {
      slidesPerView: 4
    },
    1440: {
      slidesPerView: 5
    }
  }
});


['click'].forEach(type => list.addEventListener(type, (event) => {
  if (event.target.tagName !== 'LI') {
    return false;
  }


  const points = document.querySelectorAll('.trend__box');
  for (let point of points) {
    point.classList.remove('trend__box--active');
  }
  event.target.classList.add('trend__box--active');

  let filterData = event.target.dataset.filter;

  let check = filterData;

  filterBox.forEach(elem => {

    if (elem.dataset.filter == check || filterData == "all") {
      elem.classList.remove('hide');

    } else {
      elem.classList.add('hide');
    }
  });

  /*let blocks = document.querySelectorAll(".swiper-slide");
  console.log (blocks);
  var slidesxcol;

  if (blocks.length > 12) {
   swiper.params.slidesPerColumn= 2;
  } else {
    swiper.params.slidesPerColumn= 1;
  }*/

  swiper.update();

}));
