let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    any: function() {return (isMobile.Android() || isMobile.iOS() || isMobile.Opera());},

};
    let body = document.querySelector('body');
if(isMobile.any()){
    body.classList.add('touch');
}else{
    body.classList.add('mouse');
}