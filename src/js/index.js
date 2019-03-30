var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = 'transparent'; 
    } else {
        nav.style.backgroundColor = 'white';
    }
});

