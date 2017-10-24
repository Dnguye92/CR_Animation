CR_Animation.controller('cssAniCtrl', function($scope) {
	var animatedClass = document.getElementsByClassName('animate');
	var cssPlayBtn = document.getElementById('cssPlay');
	var cssPauseBtn = document.getElementById('cssPause');

	function cssPause() {
		for(i = 0; i < animatedClass.length; i++) {
			animatedClass[i].className += ' no-animation';
		}
		console.log('Pause CSS Animation');
	}

	function cssPlay() {
		for(i = 0; i < animatedClass.length; i++) {
			animatedClass[i].classList.remove('no-animation');
		}
		console.log('Play CSS Animation');
	}
	
	cssPlayBtn.addEventListener('click', cssPlay, false);
	cssPauseBtn.addEventListener('click', cssPause, false);
});