// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.portfolio').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filters').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});


// venobox
new VenoBox({
  selector: '.venobox'
});

// Header scroll handling
window.onscroll = function () {
  var navbarBrand = document.getElementById("header-navbar-brand");
  var headerLogo = document.getElementById("headerTop__logo");
  var headerNavbarBrand = document.getElementById("header-navbar-nav");
  var elems = headerNavbarBrand.getElementsByTagName("a");

  if (window.width() > 768) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbarBrand.style.lineHeight = "60px";
      navbarBrand.style.height = "60px";
      headerLogo.style.height = "60px";
      for (var i = 0; i < elems.length; i++) {
        elems[i].style.lineHeight = "60px";
      }
    } else {
      navbarBrand.style.lineHeight = "$line-height-7";
      navbarBrand.style.height = "100px";
      headerLogo.style.height = "96px";
      for (var i = 0; i < elems.length; i++) {
        elems[i].style.lineHeight = "$line-height-7";
      }
    }
  } else {
    navbarBrand.style.lineHeight = "60px";
    navbarBrand.style.height = "60px";
    headerLogo.style.height = "60px";
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.lineHeight = "60px";
    }
  }
}
// Owl Carousel
$('.testimonial__carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 600,
  navSpeed: 100,
  responsive: {
    0: {
      items: 1,
    },
    498: {
      items: 2,
    },
    786: {
      items: 3,
    },
    1200: {
      items: 1,
    },
  }
});
$('.clients__carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 600,
  navSpeed: 100,
  responsive: {
    0: {
      items: 6,
    },
  }
});
$('.portfolio-img-7-carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 600,
  responsive: {
    0: {
      items: 1,
    },
  }
});
$('.portfolio-img-8-carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 600,
  responsive: {
    0: {
      items: 1,
    },
  }
});