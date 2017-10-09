// CR_Animation.controller('youtubeCtrl', function($scope) {
// 	$scope.LoadVideo = function(player_id) {
// 		$scope.Program = {
// 			Init: function() {
// 				this.newPlayer();
// 				this.eventHandler();
// 			},
// 			NewPlayer: function() {
// 				$scope._this = this;
// 				this.Player = new YT.Player(player_id, {});
// 				$scope._this.Player.$element = $('#' + player_id);
// 			},
// 			Play: function() {
// 				if(this.Player.getPlayerState() === 1) return;
// 		            this.Player.playVideo();
// 			},
// 			Pause: function() {
// 				if(this.Player.getPlayerState() === 2) return;
// 					this.Player.pauseVideo();
// 			},
// 			ScrollControl: function() {
// 				if(Utils.IsElementInViewport(this.Player.$element[0])) this.Play();
//             	else this.Pause();
// 			},
// 			EventHandler: function() {
// 				$scope._this = this;
// 				$(window).on('scroll', function() {
// 					$scope._this.ScrollControl();
// 				})
// 			}
// 		}

// 		$scope.Utils = {
// 			IsElementInViewport: function(el) {
// 				if(typeof jQuery === 'function' && el instanceof jQuery) el = el[0];
// 				$scope.rect = el.getBoundingClientRec();
// 				return (
// 					rect.top >= 0 &&
// 					rect.left >= 0 &&
// 					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
// 				)
// 			}
// 		}
// 		return Program.Init();
// 	}

// 	LoadVideo('playerA');
// });