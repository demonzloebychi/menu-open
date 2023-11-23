// let isMobile = {
//     Android: function() {return navigator.userAgent.match(/Android/i);},
//     iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
//     Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
//     any: function() {return (isMobile.Android() || isMobile.iOS() || isMobile.Opera());},

// };
    let body = document.querySelector('body');
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
for(i=0;i<arrow.length; i++){
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
  arrow[i].addEventListener('click', function(){
    subMenu.classList.toggle('open');
    thisArrow.classList.toggle('active');
  });
};