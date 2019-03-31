var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = '#ffffffcf'; 
    } else {
        nav.style.backgroundColor = 'white';
    }
});

$(function(){
    $(".percircle").percircle();
});

