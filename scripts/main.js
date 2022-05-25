$(document).ready(function(){
	//IMG THUMBNAIL CHANGE
    var mainImg = $('.big').attr('src');
	
	$('.product-detail .wrapper ul li img').click(function(){
		var clickImg = $(this).attr('src'); 
		 
		mainImg = $('.big').attr('src'); 
		
		$('.big').attr('src',clickImg);
		
		$('.product-detail .wrapper ul li').removeClass('selected');
		$(this).parent().addClass('selected');
		
		$(this).attr('src',mainImg);
		
	});

    //INIT SLICK SLIDER 
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });

	//INIT OWL SLIDER
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav: false,
		margin:30,
		autoplay:true,
		autoplayTimeout:1500,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2
			},
			512:{
				items:3
			},
			768:{
				items:4
			},
			1024:{
				items:5
			},
			1280:{
				items:6
			}
		}
	});

	//SELECTSIZE
	var header = document.getElementById("myDIV");
	var btns = header.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		});
	}
})