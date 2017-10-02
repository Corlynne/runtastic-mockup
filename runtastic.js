$(document).ready(function(){
	// Toggle photo view
	$('.top').click(function(){
		$('.top').toggleClass('has-photo');
	});
	
	// Switch to second screen when checkmark is clicked
	$('.save').click(function(){
		$('.screen-one').hide();
		$('.screen-two').show();
	});
	
	// Switch back to first screen when anywhere on 2nd one is clicked
	$('.screen-two').click(function(){
		$('.screen-one').show();
		$('.screen-two').hide();
	});
	
	// Show moods menu if moods-opener (icon) is clicked
	$('.moods-opener').click(function(){
		$('.moods').show();
	});
	
	// Hide moods menu if item clicked in it
	$('.moods li').click(function(){
		$('.moods').hide();
	});
	
	// Show surfaces menu if surfaces-opener (icon) is clicked
	$('.surfaces-opener').click(function(){
		$('.surfaces').show();
	});
	
	// Hide moods menu if item clicked in it
	$('.surfaces li').click(function(){
		$('.surfaces').hide();
	});
	
	// Toggle sharing buttons active if clicked
	$('.share img').click(function(){
		$(this).toggleClass('active');
	});
});