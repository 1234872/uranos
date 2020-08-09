$(document).ready(function(){
	$('.form__content input:nth-child(1)').val("EMAIL");
	$('.form__content input:nth-child(2)').val("PASSWORD");
	$('.form__content input').click(function(event){
		$(this).val("");
	});
	$('.form__content input:nth-child(1)').focusout(function(event){
		$(this).val("EMAIL");
	});
	$('.form__content input:nth-child(2)').focusout(function(event){
		$(this).val("PASSWORD");
	});

	window.onscroll = function(){
		if(window.pageYOffset > 8){
			document.querySelector('.header').classList.add('_header-a1');
		}else{
			document.querySelector('.header').classList.remove('_header-a1');
		}
	}


});