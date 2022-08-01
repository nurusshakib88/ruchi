(function($) {
    "use strict"; 

/*--
	Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function() {
	var scroll = windows.scrollTop();
	if (scroll < 250) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});

/*--
	Mobile Menu
------------------------*/
var multiPageMenu = $('.multi-page-menu');
multiPageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.multi-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
});
var onePageMenu = $('.one-page-menu');
onePageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.one-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
    onePage: true,
});

/*--
	One Page Menu
-----------------------------------*/
var headerSection = $('.header-section');
var TopOffsetId = headerSection.height() - 1;
onePageMenu.onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});

/*-- 
    Menu Toggle
-----------------------------------*/
var menuSection = $('.menu-section');
var menuToggle = $('.menu-toggle');
menuToggle.on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        $(this).html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }else{
        headerSection.addClass('menu-open');
        $(this).html('<i class="ion-android-close"></i>');
        menuSection.addClass('active');
    }
});

/*-- 
    Creative Menu Close On Link Click
-----------------------------------*/
$('.cr-menu ul li a').on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        menuToggle.html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }
});

/*-- 
    Search Toggle
-----------------------------------*/
var headerSearch = $('.header-search');
var searchToggle = $('.search-toggle');
searchToggle.on('click', function(){
    if( headerSearch.hasClass('open') ) {
        headerSearch.removeClass('open');
        $(this).html('<i class="ion-android-search"></i>');
    }else{
        headerSearch.addClass('open');
        $(this).html('<i class="ion-android-close"></i>');
    }
});

/*-- 
    Background Parallax
-----------------------------------*/
var parallaxWindow = $('.parallax-window');
parallaxWindow.parallax();

/*--
    Smooth Scroll
-----------------------------------*/ 
$('[data-scroll], .mobile-menu.one-page .mean-nav ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: - TopOffsetId,
	});
});
    
/*--
    Hero Slider
-----------------------------------*/
$('.hero-slider').slick({
    arrows: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 750,
            settings: {
                arrows: false,
            }
        },
    ]
});
    
/*--
    Creative Testimonial Slider
-----------------------------------*/
$('.cr-testimonial-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
});
    
/*--
    Corporate Testimonial Slider
-----------------------------------*/
$('.co-testimonial-slider-1').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
});
$('.co3-testimonial-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
    
/*--
    Corporate& Minimal Client Slider
-----------------------------------*/
$('.co-client-slider-1, .mp-client-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
    
/*--
    Restaurant Testimonial Slider
-----------------------------------*/
$('.res-testimonial-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: true,
});
    
/*--
    Minimal Testimonial Slider
-----------------------------------*/
$('.mp-testimonial-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
});
    
/*--
    Portfolio Details Slider
-----------------------------------*/
$('.co-portfolio-details-slider').slick({
    arrows: true,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },
    ]
});

/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var isotopFilter = $('.isotop-filter');
var isotopGrid = $('.isotop-grid');
var isotopGridMasonry = $('.isotop-grid-masonry');
var isotopGridItem = '.isotop-item';
/*-- Images Loaded --*/
isotopGrid.imagesLoaded( function() {
    /*-- Filter List --*/
    isotopFilter.on( 'click', 'button', function() {
        isotopFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        isotopGrid.isotope({ filter: filterValue });
    });
    /*-- Filter Grid Layout FitRows --*/
    isotopGrid.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 1,
        }
    });
    /*-- Filter Grid Layout Masonary --*/
    isotopGridMasonry.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 1,
        }
    });
});
    
/*-- 
    ScrollUp
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
    
/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});
/*-- Image --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*-- Gallery Video --*/
var videGalleryPopup = $('.video-gallery-popup');
videGalleryPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	},
	gallery:{
		enabled:true
	}	
});
    

/*--
	Counter UP
-----------------------------------*/
$('.counter').counterUp({
    delay: 20,
    time: 3000
});

/*-- 
    Time Picker
-----------------------------------*/ 
$('input[type="time"]').datetimepicker({
    format: 'LT',
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
});
    
/*-- 
    Date Picker
-----------------------------------*/ 
$('input[type="date"]').datetimepicker({
    format: 'L',
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
}); 
    
/*-- 
    Time & Date Picker
-----------------------------------*/ 
$('.date-time').datetimepicker({
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
});
    
   

})(jQuery);




