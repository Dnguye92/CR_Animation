CR_Animation.controller('youtubeCtrl', function($scope) {
	var player;
	var playBtn = document.getElementById('play');
	var pauseBtn = document.getElementById('pause');
	var switchBtnClass = document.getElementsByClassName('fa-pause');

	var LoadVideo = function(player_id){

	    var Program = {

	        Init: function(){
	            this.NewPlayer();
	            this.EventHandler();
	        },

	        NewPlayer: function(){
	            var _this = this;
	            player = new YT.Player(player_id, {});
	            player.$element = $('#' + player_id);
	        },

	        Play: function(){
	            if( player.getPlayerState() === 1 ) {
	            	console.log('The Player is playing');
	            	return;
	            }
	            player.playVideo();
	        },

	        Pause: function(){
	            if( player.getPlayerState() === 2 ) {
	            	console.log('The Player is paused');
	            	return;
	            }
	            player.pauseVideo();
	        },

	        ScrollControl: function(){
	            if( Utils.IsElementInViewport(player.$element[0]) ) this.Play();
	            else this.Pause();
	        },

	        EventHandler: function(){
	            var _this = this;
	            $(window).on('scroll', function(){
	                _this.ScrollControl();
	            });

	            $('.tab-link').on('click', function(){
	                var $target = $('#' + $(this).data().tab);
	                if( !!$('iframe', $target).length && $('iframe', $target).attr('id') == player.$element.attr('id') ){
	                    _this.Play();
	                }
	            });
	        }
	    };

	    var Utils = {
	        IsElementInViewport: function(el){
	            if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
	            var rect = el.getBoundingClientRect();
	            
	            // console.log('Current bottom pos. is: ', rect.bottom);
	            // console.log('Current innerHeight is: ', window.innerHeight)
	            console.log('rect.top: ', rect.top);
	            console.log('innerHeight: ', window.innerHeight);
	            console.log('rect.height: ', rect.height);
	            console.log('innerHeight - rect.height: ', (window.innerHeight - rect.height));
	            console.log('===================================');
	            console.log('rect.bottom: ', rect.bottom);
	            return (
	                rect.left >= 0 &&
		            rect.right <= window.innerWidth &&
		            rect.top  <= window.innerHeight - rect.height &&
		            rect.bottom >= window.innerHeight - rect.height
	            );
	        }

	    };
	    Program.Init();
	    playBtn.addEventListener('click', Program.Play);
	    pauseBtn.addEventListener('click', Program.Pause);

	    console.log(Program.Pause)
	};

	window.onload = function(){
	    LoadVideo('myYTPlayer');
	};


});