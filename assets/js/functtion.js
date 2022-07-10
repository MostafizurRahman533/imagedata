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

// comparison slider js


var dragging = false,
scrolling = false,
resizing = false;
//cache jQuery objects
var imageComparisonContainers = $('.cd-image-container');
//check if the .cd-image-container is in the viewport 
//if yes, animate it
checkPosition(imageComparisonContainers);
$(window).on('scroll', function(){
if( !scrolling) {
    scrolling =  true;
    ( !window.requestAnimationFrame )
        ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
        : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
}
});

//make the .cd-handle element draggable and modify .cd-resize-img width according to its position
imageComparisonContainers.each(function(){
var actual = $(this);
drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
});

//upadate images label visibility
$(window).on('resize', function(){
if( !resizing) {
    resizing =  true;
    ( !window.requestAnimationFrame )
        ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
        : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
}
});

function checkPosition(container) {
container.each(function(){
    var actualContainer = $(this);
    if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
        actualContainer.addClass('is-visible');
    }
});

scrolling = false;
}

function checkLabel(container) {
container.each(function(){
    var actual = $(this);
    updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
    updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
});

resizing = false;
}

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
dragElement.on("mousedown vmousedown", function(e) {
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');

    var dragWidth = dragElement.outerWidth(),
        xPosition = dragElement.offset().left + dragWidth - e.pageX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth(),
        minLeft = containerOffset + 10,
        maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    dragElement.parents().on("mousemove vmousemove", function(e) {
        if( !dragging) {
            dragging =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
        }
    }).on("mouseup vmouseup", function(e){
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
    e.preventDefault();
}).on("mouseup vmouseup", function(e) {
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
});
}

function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
var leftValue = e.pageX + xPosition - dragWidth;   
//constrain the draggable element to move inside his container
if(leftValue < minLeft ) {
    leftValue = minLeft;
} else if ( leftValue > maxLeft) {
    leftValue = maxLeft;
}

var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

$('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
    $(this).removeClass('draggable');
    resizeElement.removeClass('resizable');
});

$('.resizable').css('width', widthValue); 

updateLabel(labelResizeElement, resizeElement, 'left');
updateLabel(labelContainer, resizeElement, 'right');
dragging =  false;
}

function updateLabel(label, resizeElement, position) {
if(position == 'left') {
    ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
} else {
    ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
}
}

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