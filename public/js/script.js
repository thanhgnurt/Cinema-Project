

$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if(pos_body>20){
			$('.menuMain').addClass('sticker');
		}
		else {
			$('.menuMain').removeClass('sticker');
		}
		if(pos_body>1200){
			$('.back_to_top').addClass('show_back');
		}
		else{
			$('.back_to_top').removeClass('show_back');
		}
	});
	$('.back_to_top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});