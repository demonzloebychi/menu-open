let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},


};