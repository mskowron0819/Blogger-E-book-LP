$( document ).ready(function() {
	

	var imgSrc = $('header');
	var mq = window.matchMedia("(min-width: 576px)");
	function widthChange(mq) {
	  if (mq.matches) {
	    imgSrc.css('background','url(assets/img/bg-desktop.jpg) no-repeat top center/cover');
	  } else {
	    imgSrc.css('background','url(assets/img/bg-mobile.png) no-repeat top center/cover');
	  }
	}
	widthChange(mq)
	mq.addListener(widthChange);

	// pagination
	var page = $('.page');
	var pageBtn = $('.page-btn');

	pageBtn.on('click', function(e) {
		if($(this).hasClass('page-active')){ 
			page.toggleClass('hidden-xs');
			pageBtn.toggleClass('page-active');
			$('#book').toggleClass('page-position');
		}		
	});

	//Slider

	var prev = $(".prev");
    var next = $(".next");
    var sliderImg = $(".slider li");
    var slider = $(".slider ul");
    
    sliderImg.find('h3').addClass('slider-underline');
    console.log($(".slider").find('.active').find('h3'));
    var liHeight = $(".slider li.active").height();
	$(".slider li.show").css('height', liHeight);
	$(".slider li").addClass('hidden');
	
	function sliderActive(mq){
		if (mq.matches) {
			$(".slider li").addClass('hidden');
			$(".slider li").removeClass('show');
			$(".slider li.active").next().toggleClass('show hidden');
		    $(".slider li.active").next().next().toggleClass('show hidden');
		    $(".slider li.active").prev().toggleClass('show hidden');
		    $(".slider li.active").prev().prev().toggleClass('show hidden');
		    $(".slider li.active").removeClass('hidden');	
		}
		var liHeight = $(".slider li.active").height();
		$(".slider li.show").css('height', liHeight);
	}
	sliderActive(mq);
	next.click(function() {
    		var slideActive = $(this).parent().find('li.active');
    		var firstSlide = $(this).parent().find('li:first-child');
    		var firstSlideCopy = firstSlide.clone();
    		var h3 = slideActive.find('h3');
    		var h3Next = slideActive.next().find('h3');
    		slideActive.removeClass('active');
    		slideActive.next().addClass('active');
    		h3.removeClass('show');
    		h3.next().removeClass('show');
	    	h3Next.addClass('show');
	    	h3Next.next().addClass('show');
	    	
	    	firstSlide.remove();
	    	slider.append(firstSlideCopy);
	    	sliderActive(mq);
	    	
	    	
    		
    });
    // next.click(function() {
    // 		var slideActive = $(this).parent().find('li.active');
    // 		var h3 = slideActive.find('h3');
    // 		var h3Next = slideActive.next().find('h3');
    // 	if($(this).parent().find('li:last-child').hasClass('active')){
    // 		slideActive.removeClass('active');
    // 		$(this).parent().find('li:first-child').addClass('active');
    // 		var newActive = $(this).parent().find('li.active');
    // 		var newH3 = newActive.find('h3');
    // 		h3.removeClass('show');
    // 		h3.next().removeClass('show');
    // 		newH3.addClass('show');
    // 		newH3.next().addClass('show');
    // 	}else{
    // 		slideActive.removeClass('active');
    // 		slideActive.next().addClass('active');
    // 		h3.removeClass('show');
    // 		h3.next().removeClass('show');
	   //  	h3Next.addClass('show');
	   //  	h3Next.next().addClass('show');
    // 	}    	
    // });

    prev.click(function () {
		
    	if($(this).parent().find('li:first-child').hasClass('active')){
    		$(this).parent().find('li:last-child').addClass('active');
    	}
    	var slideActive = $(this).prev().find('li.active');
		var h3 = slideActive.find('h3');
    	var h3Next = slideActive.prev().find('h3');

    	slideActive.toggleClass('active');
    	slideActive.prev().addClass('active');
    	h3.toggleClass('show');
    	h3.next().toggleClass('show');
    	h3Next.addClass('show');
    	h3Next.next().addClass('show');
    });
    


});