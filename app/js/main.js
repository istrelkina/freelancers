$(function(){

	$('.team-link').on('click',function(){
		let ths = $(this);

    	ths.toggleClass('active');
    	ths.next().toggleClass('open');

    });

});