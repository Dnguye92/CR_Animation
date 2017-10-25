CR_Animation.controller('html5Ctrl', function($scope) {
	var videoContainer = document.getElementById('videoContainer');
	var html5Video = document.createElement('video');
	var source = document.createElement('source');
	var product = document.createElement('img');

	html5Video.setAttribute('loop', 'true');
	html5Video.setAttribute('id', 'html5Video');
	html5Video.setAttribute('preload', 'none');

	source.setAttribute('type', 'video/mp4');
	source.src = 'img/Butterfly.mp4';

	product.src = 'img/test-prod.jpg';
	videoContainer.appendChild(product);

	html5Video.appendChild(source);
    console.log(html5Video);

    function IsElementInViewport(){
    	var rect = videoContainer.getBoundingClientRect();
        console.log('===================================');
        console.log('rect: ', rect);
        console.log('rect.top: ', rect.top);
        console.log('innerHeight: ', window.innerHeight);
        console.log('rect.height: ', rect.height);
        console.log('innerHeight - rect.height: ', (window.innerHeight - rect.height));
        console.log('rect.bottom: ', rect.bottom);
        console.log('===================================');
        
        if(rect.left >= 0 &&
           rect.right <= window.innerWidth &&
           rect.top <= window.innerHeight - rect.height &&
           rect.bottom >= window.innerHeight - rect.height) {
        	product.replaceWith(html5Video);
        	console.log('This video element is within the VW');
        	html5Video.play();
        } else {
        	console.log('This video element IS NOT within the VW');
        	html5Video.replaceWith(product);
        }
    };
    window.addEventListener('scroll', IsElementInViewport, false);
});