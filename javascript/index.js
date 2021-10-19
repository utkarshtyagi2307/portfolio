window.addEventListener("scroll", function(){
	if (window.scrollY> 100) {
		$(".navbar").addClass("fixed-top")
		$(".navbar").addClass("bg-nav-white")
	} if (window.scrollY == 0) {
		$(".navbar").removeClass("fixed-top")
		$(".navbar").removeClass("bg-nav-white")
	}
})



$( ".dark-mode-btn" ).click(function() {
    $( ".toggle" ).toggle();

	$(".navbar").toggleClass("bg-nav-white")
	$(".navbar").toggleClass("bg-nav-dark")

    $("body").toggleClass("for-dark")

    $(".navbar").toggleClass("navbar-light")
    $(".navbar").toggleClass("navbar-dark")

    $(".footer-f").toggleClass("footer-top")
    $(".footer-f").toggleClass("footer-dark")

    $(".footer-r").toggleClass("footer-r")
    $(".footer-r").toggleClass("footer-r-dark")

    $(".es").toggleClass("soso")
    $(".es").toggleClass("soso-dark")


  });


  $("#btn-port-2").click(function() {
    $("#btn-port-2").addClass("btn-onclick")
    $("#btn-port-1").removeClass("btn-onclick")
    $("#btn-port-3").removeClass("btn-onclick")

    $(".websites-project").css("display","block");
    $(".js-project").css("display","none");
  })
  $("#btn-port-1").click(function() {
    $("#btn-port-1").addClass("btn-onclick")
    $("#btn-port-2").removeClass("btn-onclick")
    $("#btn-port-3").removeClass("btn-onclick")
    
    $(".websites-project").css("display","block");
    $(".js-project").css("display","block");

  })
  $("#btn-port-3").click(function() {
    $("#btn-port-3").addClass("btn-onclick")
    $("#btn-port-1").removeClass("btn-onclick")
    $("#btn-port-2").removeClass("btn-onclick")

    $(".websites-project").css("display","none");
    $(".js-project").css("display","block");
  })


  $( ".color-change-btn" ).click(function() {
	$(".change-color").toggleClass("purple")

	$(".fa-toggle-on").toggleClass("toggle-blue")
	$(".fa-toggle-on").toggleClass("toggle-purple")

	$(".logo-img-1").toggleClass("purple")
	$(".logo-img-2").toggleClass("purple")

	$(".my-img").toggleClass("purple")

	$(".download-btn").toggleClass("btn-cv-purple")
	$(".download-btn").toggleClass("btn-cv")

	$(".move-text").toggleClass("moving-purple")
	$(".move-text").toggleClass("moving")

	$(".color-to-change").toggleClass("blue")
	$(".color-to-change").toggleClass("color-purple")

	$(".bg-color-to-change").toggleClass("bg-blue")
	$(".bg-color-to-change").toggleClass("bg-purple")
	
	$(".about-img img").toggleClass("border-blue")
	$(".about-img img").toggleClass("border-purple")

	$(".Portfolio-alll").toggleClass("portfolio-blue")
	$(".Portfolio-alll").toggleClass("portfolio-purple")

  })



  // List of sentences
var _CONTENT = [ 
	" Programmer.", 
	" YouTuber.", 
	" Developer.", 
	" Web Designer.",
  " Freelancer."
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);