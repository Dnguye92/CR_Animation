var player;
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
            if( player.getPlayerState() === 1 ) return;
            player.playVideo();
        },

        Pause: function(){
            if( player.getPlayerState() === 2 ) return;
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

    // var Utils = {
    //     IsElementInViewport: function(el){
    //         if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
    //         var rect = el.getBoundingClientRect();
    //         return (
    //             rect.top >= 0 &&
    //             rect.left >= 0 &&
    //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //         );
    //     }
    // };
    Program.Init();
};

window.onload = function(){
    LoadVideo('myYTPlayer');
};