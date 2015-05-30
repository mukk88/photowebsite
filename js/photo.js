$(function(){
	$("#image-container").justifiedGallery({
		margins:10,
		lastRow: 'nojustify',
		rowHeight:220
	}).on('jg.complete', function () {
	    $('#image-container a').swipebox();
	});


	$('#hamburger').click(function(){
		$('.layout').toggleClass('expanded');
	});

	$('#navhome').click(function(){
		window.location = 'index.html';
	});

	$('#navlandscape').click(function(){
		window.location = 'landscape.html';
	});

	$('#navportrait').click(function(){
		window.location = 'portrait.html';
	});

	$('#navabout').click(function(){
		window.location = 'about.html';
	});

	$('#navprice').click(function(){
		window.location = 'price.html';
	});

});