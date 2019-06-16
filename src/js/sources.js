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

// Get data and create lists
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var sources = data.map(function(e) {
      return {
          source_name: e.source_name,
          source_description: e.source_description,
          source_link: e.source_link,
          source_folder : e.source_folder
      }
  });

  var filtered = Object.values(
    data.reduce( (c, e) => {
      if (!c[e.source_name]) c[e.source_name] = e;
      return c;
    }, {})
  );


// datatable 
const tableSource= document.getElementById('datatable-source');
for (i = 0; i < filtered.length; i++){
  tableSource.innerHTML  += `		
    <td><a href="`+ filtered[i].source_link + `" ><h5>`+ filtered[i].source_name + `</h5></a></td>
    <td>`+ filtered[i].source_description + `</td>
    <td><a href="`+ filtered[i].source_folder + `" target="_blank"><i class="fas fa-arrow-down"></i></a></td>
  `}

})
$(document).ready(function() {
  $('#example').DataTable( {
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching": false
  } );
} );
