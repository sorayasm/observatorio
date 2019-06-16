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
const searchFiles = document.getElementById('search-files');
const listFiles = document.getElementById('match-list-files');

// Get data 
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let datasets = data;

     // create list 
    const htmlDatasets = datasets.map(e => `
    <div class="text-left bg-light">
        <div class="m-3 p-3">
            <a href="${e.file_link} "><h4 class="mb-0">Archivo ${e.file_name}</h4></a>
            <a class="btn btn-sm btn-primary float-right" href="${e.file_link} ">Descargar archivo ${e.file_type}</a>
            <a href="${e.source_link} "><small>Fuente: ${e.source_name}</small></a><small>     Año: ${e.file_year}</small>
            <p>Descripción: ${e.file_description}</p>
        </div>
    </div>
    `).join('')

    listFiles.innerHTML = htmlDatasets;
 });

