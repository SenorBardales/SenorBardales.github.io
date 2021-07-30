$(document).ready(function() {

	$('body').delay(1000);
	$('body').fadeIn(1500);
	
	

	window.onblur = function () { document.title = 'I miss you 💞'; }
	window.onfocus = function () { document.title = 'Daniel Bardales Chavez'; }
	
	$('img').bind('contextmenu', function(e) { return false; });
	$('img').bind("ondragstart", function(e) { e.preventDefault(); });
	$('img').bind("drag", function(e) { e.preventDefault(); });
	$('img').on('dragstart', function(event) { event.preventDefault(); });

	$('a.transition').click(function(event) {
	  event.preventDefault();
	  newLocation = this.href;
	  $('body').fadeOut(500, newpage);
	});
	
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});

	$("div.lazy").lazyload({
	    effect : "fadeIn"
	});

	function newpage() {
		window.location = newLocation;
	}
	
});