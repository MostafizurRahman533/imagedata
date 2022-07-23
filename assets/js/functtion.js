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
var header = document.getElementById("select-area");
var btns = header.getElementsByClassName("form-control");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  // var current = document.getElementsByClassName("show");
  // current[0].className = current[0].className.replace(" show", "");
  // this.className += " show";
  });
}


    })(jQuery);

// input file preview and delete 

//I added event handler for the file upload control to access the files properties.
document.addEventListener("DOMContentLoaded", init, false);

//To save an array of attachments
var AttachmentArray = [];

//counter for attachment array
var arrCounter = 0;

//to make sure the error message for number of files will be shown only one time.
var filesCounterAlertStatus = false;

//un ordered list to keep attachments thumbnails
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

function init() {
  //add javascript handlers for the file upload event
  document
    .querySelector("#files")
    .addEventListener("change", handleFileSelect, false);
}

//the handler for file upload event
function handleFileSelect(e) {
  //to make sure the user select file/files
  if (!e.target.files) return;

  //To obtaine a File reference
  var files = e.target.files;

  // Loop through the FileList and then to render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    //instantiate a FileReader object to read its contents into memory
    var fileReader = new FileReader();

    // Closure to capture the file information and apply validation.
    fileReader.onload = (function(readerEvt) {
      return function(e) {
        //Apply the validation rules for attachments upload
        ApplyFileValidationRules(readerEvt);

        //Render attachments thumbnails.
        RenderThumbnail(e, readerEvt);

        //Fill the array of attachment
        FillAttachmentArray(e, readerEvt);
      };
    })(f);

    // Read in the image file as a data URL.
    // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
    // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
    fileReader.readAsDataURL(f);
  }
  document
    .getElementById("files")
    .addEventListener("change", handleFileSelect, false);
}

//To remove attachment once user click on x button
jQuery(function($) {
  $("div").on("click", ".img-wrap .close", function() {
    var id = $(this)
      .closest(".img-wrap")
      .find("img")
      .data("id");

    //to remove the deleted item from array
    var elementPos = AttachmentArray.map(function(x) {
      return x.FileName;
    }).indexOf(id);
    if (elementPos !== -1) {
      AttachmentArray.splice(elementPos, 1);
    }

    //to remove image tag
    $(this)
      .parent()
      .find("img")
      .not()
      .remove();

    //to remove div tag that contain the image
    $(this)
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove div tag that contain caption name
    $(this)
      .parent()
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove li tag
    var lis = document.querySelectorAll("#imgList li");
    for (var i = 0; (li = lis[i]); i++) {
      if (li.innerHTML == "") {
        li.parentNode.removeChild(li);
      }
    }
  });
});

//Apply the validation rules for attachments upload
function ApplyFileValidationRules(readerEvt) {
  //To check file type according to upload conditions
  if (CheckFileType(readerEvt.type) == false) {
    alert(
      "The file (" +
        readerEvt.name +
        ") does not match the upload conditions, You can only upload jpg/png/gif files"
    );
    e.preventDefault();
    return;
  }

  //To check file Size according to upload conditions
  if (CheckFileSize(readerEvt.size) == false) {
    alert(
      "The file (" +
        readerEvt.name +
        ") does not match the upload conditions, The maximum file size for uploads should not exceed 300000000 KB"
    );
    e.preventDefault();
    return;
  }

  //To check files count according to upload conditions
  if (CheckFilesCount(AttachmentArray) == false) {
    if (!filesCounterAlertStatus) {
      filesCounterAlertStatus = true;
      alert(
        "You have added more than 31 files. According to upload conditions you can upload 10 files maximum"
      );
    }
    e.preventDefault();
    return;
  }
}

//To check file type according to upload conditions
function CheckFileType(fileType) {
  if (fileType == "image/jpeg") {
    return true;
  } else if (fileType == "image/png") {
    return true;
  } else if (fileType == "image/gif") {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check file Size according to upload conditions
function CheckFileSize(fileSize) {
  if (fileSize < 300000000) {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check files count according to upload conditions
function CheckFilesCount(AttachmentArray) {
  //Since AttachmentArray.length return the next available index in the array,
  //I have used the loop to get the real length
  var len = 0;
  
  for (var i = 0; i < AttachmentArray.length; i++) {
    if (AttachmentArray[i] !== undefined) {
      len++;
    }
  }
  //To check the length does not exceed 10 files maximum
  if (len > 90) {
    return false;
  } else {
    return true;
  }
}

//Render attachments thumbnails.
function RenderThumbnail(e, readerEvt) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = [
    '<div class="img-wrap">  <span class="close">&times;</span>' +
      '<img class="thumb" src="',
    e.target.result,
    '" title="',
    escape(readerEvt.name),
    '" data-id="',
    readerEvt.name,
    '"/>' + "</div>"
  ].join("");

  var div = document.createElement("div");
  div.className = "FileNameCaptionStyle";
  li.appendChild(div);
  div.innerHTML = [readerEvt.name].join("");
  document.getElementById("Filelist").insertBefore(ul, null);
}

//Fill the array of attachment
function FillAttachmentArray(e, readerEvt) {
  AttachmentArray[arrCounter] = {
    AttachmentType: 1,
    ObjectType: 1,
    FileName: readerEvt.name,
    FileDescription: "Attachment",
    NoteText: "",
    MimeType: readerEvt.type,
    Content: e.target.result.split("base64,")[1],
    FileSizeInBytes: readerEvt.size,
  };
  arrCounter = arrCounter + 1;
}


