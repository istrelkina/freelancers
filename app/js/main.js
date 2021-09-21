$(function(){

	$('.team-link').on('click',function(){
		let ths = $(this);

    	ths.toggleClass('active');
    	ths.next().toggleClass('open');

    });


	$('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplaySpeed: 5000,
	  arrows: true,
	  fade: false,
	  autoplay: true,
	  //dots: true,
	  prevArrow: '<div class="slick-prev slider-arrow-left"></div>',
	  nextArrow: '<div class="slick-next slider-arrow-right"></div>'
	});
	$('.slider__nav').slick({
	  slidesToShow: $(window).width() > 450 ? 4 : 3,
	  arrows:false	  
	  	  
	});
	
	$('.nav__menu-link').on('click', function() {

	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 470,   // по умолчанию «400»
	        easing: "linear" // по умолчанию «swing»
	    });
	     
	    return false;
	});

	$('.menu-burger').on('click',function(){
        $('.menu').slideToggle();
    });
    $('.menu-burger').on('click',function(){
    	$('.menu-burger').toggleClass('active');
    });
});