var Carousel = function() {};

Carousel.prototype.init = function(carouselContainer) {
	var carouselContainerWidth; 
	var carousel = carouselContainer.firstElementChild; 
	var carouselWidth = 0; 
	var carouselElements = carousel.getElementsByTagName('li'); 

	for (var i = 0; i < carouselElements.length; i++) {
		carouselWidth += 
			carouselElements[i].getBoundingClientRect().right - 
			carouselElements[i].getBoundingClientRect().left +
			parseFloat(window.getComputedStyle(carouselElements[i])['marginLeft'].replace('px', '')); 
	}

	carousel.style.width = carouselWidth + 'px'; 
	carousel.style.webkitTransitionProperty = 'left';

	// BEGIN set up touch events for the carousel --
	var touchStartX = 0; 
	var carouselStartX = 0; 
	
	carousel.addEventListener(
		'touchstart', 
		function(e) {
			e.preventDefault(); 
			
			carouselContainerWidth =
				carouselContainer.getBoundingClientRect().right - 
				carouselContainer.getBoundingClientRect().left; 
			touchStartX = eval(e.touches[0].pageX); 
			carouselStartX = window.getComputedStyle(carousel)['left'].replace('px', ''); 
		}, 
		false
	); 

	carousel.addEventListener(
		'touchmove', 
		function(e) {
			var leftPos = carouselStartX - (touchStartX - e.touches[0].pageX); 

			if (leftPos <= 0 && leftPos >= carouselContainerWidth - carouselWidth) {
				carousel.style.left = leftPos + 'px';
			}
		}, 
		false
	); 
	// -- END set up touch events for the carousel
}