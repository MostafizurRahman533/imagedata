//const { Collapse } = require("bootstrap");


// navbar scroll animation
window.onscroll = pagescroll;
pagescrollvalid = window.pageYOffset;
function pagescroll() {
  var pageup = window.pageYOffset;
  var header = document.getElementById('header');
  if(pagescrollvalid && pageup == 0){
    header.classList.remove("fixed");
    header.classList.remove("top-bar");
  }
  else if(pagescrollvalid > pageup){
    header.classList.add("fixed");
  }
  else if(pagescrollvalid < pageup){
    header.classList.add("top-bar");
    header.classList.remove("fixed");
  }
  else{
    header.classList.remove("fixed");
  } 
  pagescrollvalid = pageup;
}




  // juery js 
  (function($){
    'use strict';
    	// mobile menu responsive
      $(document).on('click','.menu-bar',function(){
        $(".list-menu").addClass("open");
             //$(".main-menu").toggleClass("open");
            $(".overlay").addClass("active");
            $("body").addClass("overflow");
        });
//input filed function 
//counter up js  

var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    
    	var $counters = $(".counter");
    
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 1000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});



        // overlay remove
        $('.overlay').on('click', function(){
          $('body').removeClass('overflow');
          $('.list-menu').removeClass('open');
          $('body,.overlay').removeClass('active');
          $('body').removeClass('overflow');
        });
      
      // scroll up start here
            $(function(){
              // $(window).scroll(function(){
              //   if ($(this).scrollTop() > 300) {
              //     $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
              //   } else {
              //     $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'});
              //   }
              // });
              //Click event to scroll to top
              $('.scrollToTop').on('click', function(){
                $('html, body').animate({scrollTop : 0},0);
                return false;
              });
            });

      //success alert
      
        $(".check-icon").hide();
        setTimeout(function () {
          $(".check-icon").show();
        }, 0.10)

// counter up js activation code

$( document ).ready( function() {
	
	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    
    	var $counters = $(".counter");
    
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 3000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
 });
// Cannot style datalist elements yet, so get
// each option value and pass to jQuery UI Autocomplete
$('input[data-list]').each(function () {
  var availableTags = $('#' + $(this).attr("data-list")).find('option').map(function () {
    return this.value;
  }).get();

  $(this).autocomplete({
    source: availableTags
  }).on('focus', function () {
    $(this).autocomplete('search', ' ');
  }).on('search', function () {
    if ($(this).val() === '') {
      $(this).autocomplete('search', ' ');
    }
  });
});

// li class active 
// Add active class to the current button (highlight it)
var header = document.getElementById("pills-tab");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("show");
  current[0].className = current[0].className.replace(" show", "");
  this.className += " show";
  });
}


    })(jQuery);