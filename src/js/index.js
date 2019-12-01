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

//  percent graphs
$(function() {
    $(".percircle").percircle();
});

// Search
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Get data and filtered
const searchPages = async searchText => {
    const res = await fetch('assets/data/search.json');
    const pages = await res.json()

    // filter
    let matches = pages.filter(page => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return page.title.match(regex) || page.excerpt.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches.slice(0, 5));
}

// Show results
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mt-0 mb-0 text-left">
        <a href="${match.url} ">
        <h5 class="mb-0">${match.title} </h5>
        <small>${match.excerpt}</small></a>
        </div>
        `).join('')

        matchList.innerHTML = html;
    }
}

if (search) search.addEventListener('input', () => searchPages(search.value));