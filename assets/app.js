$( document ).ready(function() {
	

	var imgSrc = $('header');
	var bookImg = $('#book');
	var bookImg2 = $('#book .container');
	var mq = window.matchMedia("(min-width: 576px)");

	function widthChange(mq) {
	  if (mq.matches) {
	    imgSrc.css('background','url(assets/img/bg-desktop.jpg) no-repeat top center/cover');
	    bookImg2.css('background', 'url(assets/img/book.png) no-repeat center/100% 100%');
	    bookImg.css('background', 'none');
	  } else {
	    imgSrc.css('background','url(assets/img/bg-mobile.png) no-repeat top center/cover');
	    bookImg.css('background', 'url(assets/img/book.png) no-repeat left/185% 100%');
	    bookImg2.css('background', 'none');
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
    
    sliderImg.find('h3').addClass('slider-underline');
    console.log($(".slider").find('.active').find('h3'));
    var liHeight = $(".slider li.active").height();
	$(".slider li.show").css('height', liHeight);
	$(".slider li").addClass('hidden');

	function sliderActive(mq){
		var slideActive = $(".slider li.active");
		var sliderWidth = $(".container").width();
		$(".slider li").addClass('hidden');
		$(".slider li").removeClass('show');
		slideActive.find('p').css('width', '100%');	
		slideActive.find('h3').css('width', '100%');

		if (mq.matches) {
			slideActive.next().toggleClass('show hidden');
		    slideActive.next().next().toggleClass('show hidden');
		    slideActive.prev().toggleClass('show hidden');
		    slideActive.prev().prev().toggleClass('show hidden');
		    slideActive.removeClass('hidden');
		    slideActive.find('p').css('width', sliderWidth);	
		    slideActive.find('h3').css('width', sliderWidth);	
		}
	}
	sliderActive(mq);
	mq.addListener(sliderActive);
	next.click(function() {
		var slider = $(this).parent().find('ul');
    	var slideActive = $(this).parent().find('li.active');
    	var firstSlide = $(this).parent().find('li:first-child');
    	var firstSlideCopy = firstSlide.clone();
    	var h3 = slideActive.find('h3');
    	var h3Next = slideActive.next().find('h3');
    	firstSlide.remove();
	    slider.append(firstSlideCopy);
    	slideActive.removeClass('active');
    	slideActive.next().addClass('active');
    	h3.removeClass('show');
    	h3.next().removeClass('show');
	    h3Next.addClass('show');
	    h3Next.next().addClass('show');
	    sliderActive(mq);
    });
    
    prev.click(function () {
		var slider = $(this).parent().find('ul');
		var slideActive = $(this).parent().find('li.active');
    	var lastSlide = $(this).parent().find('li:last-child');
    	var lastSlideCopy = lastSlide.clone();
   		var h3 = slideActive.find('h3');
   		var h3Prev = slideActive.prev().find('h3');
    	slideActive.removeClass('active');
    	slideActive.prev().addClass('active');
    	h3.removeClass('show');
   		h3.next().removeClass('show');
    	h3Prev.addClass('show');
    	h3Prev.next().addClass('show');
	   	lastSlide.remove();
	   	slider.prepend(lastSlideCopy);
	   	sliderActive(mq);
    });

    //Form validation


    $("#form").submit(function(e){
    	console.log('hello');
	    var nameReg = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}$/;
	    var surnameReg = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,30}$/;
	    var emailReg = /^([\w-\.]+@([\w-]{2,}\.)+[\w-]{2,10})?$/;
	    var wwwReg = /^[a-zA-Z0-9\-]+\.[a-zA-Z]{2,10}?$/;

	    var name = $('#name').val();
	    var surname = $('#surname').val();
	    var email = $('#email').val();
	    var www = $('#www').val();
	    var checkbox = $('#checkbox');

	        if(name == ""){
	            $('#name').attr('placeholder','Podaj proszę swoje imię.').addClass('error');
	        } 
	        else if(!nameReg.test(name)){
	        	$('#name').val('');
	            $('#name').attr('placeholder','Wpisz poprawne imię!').addClass('error');
	        }
	        if(surname == ""){
	            $('#surname').attr('placeholder','Podaj proszę swoje nazwisko.').addClass('error');
	        } 
	        else if(!nameReg.test(surname)){
	        	$('#surname').val('');
	            $('#surname').attr('placeholder','Wpisz poprawne nazwisko!').addClass('error');
	        }
	        if(email == ""){
	            $('#email').attr('placeholder','Podaj proszę adres e-mail.').addClass('error');
	        } 
	        else if(!nameReg.test(email)){
	        	$('#email').val('');
	            $('#email').attr('placeholder','Wpisz poprawny adres e-mail!').addClass('error');
	        }
	        if(www == ""){
	            $('#www').attr('placeholder','Podaj proszę adres bloga.').addClass('error');
	        } 
	        else if(!nameReg.test(www)){
	        	$('#www').val('');
	            $('#www').attr('placeholder','Wpisz poprawny adres strony!').addClass('error');
	        }
	        if(!checkbox.prop("checked")){
	        	$('.checkbox').append('<p>Pole musi być zaznaczone.</p>');
	        }
	        e.preventDefault();
	});   
	    


});



