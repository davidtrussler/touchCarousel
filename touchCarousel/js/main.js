/**
 * main JS file for Test page
**/
document.addEventListener('DOMContentLoaded', init, false); 

function init() {
	setUpCarousel(); 
}

setUpCarousel = function() {
	var carousel = new Carousel(); 
	
	carousel.init(document.getElementById('carousel')); 
}