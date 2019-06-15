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
const search_files = document.getElementById('search-files');
const matchList_files = document.getElementById('match-list-files');

// Get data and filtered
const searchPages = async searchText => {
    const res = await fetch('../../assets/data/datasets.json');
    const datasets = await res.json();
    
    // filter
    let matches = datasets.filter( dataset=> {
    const regex = new RegExp(`${searchText}`, 'gi');
    return dataset.file_name.match(regex) || dataset.file_description.match(regex);
    });

    if(searchText.length === 0)   {
        matches = [];
        matchList_files.innerHTML = '';
        } 
        
    outputHtml(matches);
}

// Show results
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="card text-left">
        <h5 class="mb-0"></h5>
        <p> ${match.source_name}</p>
        <p> ${match.source_description}</p>
        <p> ${match.source_link}</p>
        <p> ${match.file_name}</p>
        <p> ${match.file_type}</p>
        <p> ${match.file_year}</p>
        <p> ${match.file_description}</p>
        <p> ${match.file_link}</p>
        <a href=" "></a>
        </div>
        `).join('')

       matchList_files.innerHTML = html;
    }
}

search_files.addEventListener('input', () => searchPages(search_files.value));