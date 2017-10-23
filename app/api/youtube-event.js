//this is the logic to see if the player is in view
var Utils = {
    IsElementInViewport: function(el){
        if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
        var rect = el.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= window.innerWidth &&
            rect.top  <= window.innerHeight - rect.height &&
            rect.bottom >= window.innerHeight - rect.height
        );
    }
};