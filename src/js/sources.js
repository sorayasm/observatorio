// nav
var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = '#ffffffcf'; 
    } else {
        nav.style.backgroundColor = 'white';
    }
});


// Search
const listSources= document.getElementById('match-list-sources');

// Get data and create lists
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
        const htmlSources = data.map(e => `
        <div class="text-left bg-light">
            <div class="m-3 p-3">
                <a href="${e.source_link} "><h4 class="mb-0 text-bold">${e.source_name}</h4></a>
                <p>Descripción: ${e.source_description}</p>
                <a href="${e.file_link} "><small>Archivo: ${e.file_name}</small></a>
                <a class="btn btn-sm btn-primary float-right" href="${e.file_link} ">Descargar ${e.file_type}</a>
            </div>
        </div>
        `).join('')
       listSources.innerHTML = htmlSources;
    });


