$(function(){
	$("#container").justifiedGallery({
		margins:10,
		lastRow: 'nojustify',
		rowHeight:220
	}).on('jg.complete', function () {
	    $('#container a').swipebox();
	});
});