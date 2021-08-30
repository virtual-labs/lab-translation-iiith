/*This method is called when the page is loaded. */
window.onload = function(){ 
    addclickEvents();
}

//This function is used to add click events to elements
function addclickEvents(){
    
    document.getElementById("transparent_btn").addEventListener("click", function() {
            startExperiment();
    }, false);

}

// This method is called to rotate the elements.
function rotateElements(id, deg) {
	//Code for Safari
    document.getElementById(id).style.WebkitTransform = 'rotate('+deg+'deg)';  
    // Code for IE9
    document.getElementById(id).style.msTransform = 'rotate('+deg+'deg)'; 
    // Standard syntax
    document.getElementById(id).style.transform = 'rotate('+deg+'deg)'; 
}

// This method is called to move the elements from one position to other position.
function animateStraight(id, top, left) {
	$('#'+id).animate({
	   	top: top+'%',
	    left: left+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	});
}

// This method is called to move the elements from one position to other position.
function animate(id, top1, left, top2) {
	$('#'+id).animate({
	   	top: top1+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	})
	.animate({
	   	left: left+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	})
	.animate({
	   	top: top2+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	});
}

//This method is called on clicking the preparation of gold solution button.
function startExperiment() {
	// Remove the event handler of the button 
	document.getElementById('transparent_btn').style.visibility='hidden';
	document.getElementById('background').src= "images/background2.png";
	$('#yellow_cuvette, #lamp1').css('visibility', 'visible');
	$('#lamp1').animate({opacity: '1'}, 1000);

	setTimeout(function() {
		$('#cube, #arrow, #instruction_tag').css('visibility', 'visible');
		animateStraight('cube', '+=23', '+=0');
		animateStraight('arrow', '-=4', '+=0');
		animateStraight('instruction_tag', '-=4', '+=0');
	}, 2000);

	setTimeout(function() {
		setInterval(function(){
			$('#arrow').fadeIn().fadeOut();
		}, 50);
		$('#clockface1, #clockhand1').css('visibility', 'visible');
		rotateElements('clockhand1', '180');
	}, 3000);

	setTimeout(function() {
		$('#cube, #arrow, #instruction_tag, #yellow_cuvette, #lamp1, #clockface1, #clockhand1').css('visibility', 'hidden');
		$('#lamp2, #purple_cuvette').css('visibility', 'visible');
		$('#lamp2').animate({opacity: '0.1'}, 1000);
		animateStraight('purple_cuvette', '+=22', '+=26');
	}, 7000);

	setTimeout(function() {
		location.href="exp10b.html";
	}, 8000);
}
