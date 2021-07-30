$(document).ready(function() {

	$('body').fadeIn(1000);

	window.onblur = function () { document.title = 'Come back :('; }
	window.onfocus = function () { document.title = 'My website'; }
	
	$('img').bind('contextmenu', function(e) { return false; });
	$('img').bind("ondragstart", function(e) { e.preventDefault(); });
	$('img').bind("drag", function(e) { e.preventDefault(); });
	$('img').on('dragstart', function(event) { event.preventDefault(); });


	$('a.transition').click(function(event) {
	  event.preventDefault();
	  newLocation = this.href;
	  $('body').fadeOut(350, newpage);
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

