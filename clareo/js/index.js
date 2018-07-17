$(document).ready(function() {
    
    var swiper = new Swiper('.main-visual.swiper-container', {
        loop: true,
        paginationClickable: true,
        centeredSlides: true,
        effect: 'fade',
        /*fadeEffect: {
                    crossFade: true
                },*/
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
        },
        speed:800,
        autoplayDisableOnInteraction: false
    });

    /* Category Button  */
    $('.fold').click(function() {
        $('#aside')
            .css({'opacity':'0'})
            .css({'z-index':'1000'})
            .css({'visibility':'visible'})
        	.css({'overflow':'hidden'})
        	.animate({ opacity:'1' }, 200);               
        $('html,body').css({'overflow':'hidden'});
     })
    
     $('.closeBtn').click(function() {
        $('#aside')
        	.animate({ opacity:'0' }, 200, function() {
            	$(this).css({'z-index':'-1'})
            	$(this).css({'visibility':'hidden'});                     
    	    	$(this).css({'overflow':'auto'})
	        })
        $('html,body').css({'overflow':'auto'});
     })
    
    $('.open_sns').click(function() {
         if( $(this).hasClass('active') ) {
	   		 $(this).siblings('.sub').slideUp()     
             $(this).removeClass('active');
             $(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
         }
        else {
	   		 $(this).siblings('.sub').slideDown();     
             $(this).addClass('active');
             $(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    })
    /* Category Button  */    
});