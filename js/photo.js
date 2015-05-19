$(function(){
	$("#container").justifiedGallery({
		margins:10,
		rowHeight:200
	}).on('jg.complete', function () {
	    $('#container a').swipebox();
	});
});