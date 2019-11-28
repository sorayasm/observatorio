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
$(document).ready(function() {
  $('#files').DataTable( {
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching": false
  } );
} );


// // Get data and create lists
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
// datatable 
const tableSource= document.getElementById('datatable-source');
for (i = 0; i < data.length; i++){
  tableSource.innerHTML  += `		
    <td class="excerpt">`+ data[i].file_name + `</td>
    <td class="d-none d-sm-block">`+ data[i].file_description + `</td>
    <td><a href="`+ data[i].file_link + `" target="_blank"><i class="fas fa-arrow-down"></i></a></td>
  `}

})

// Search
jQuery("#search-table").on("keyup", function () {
  var value = jQuery(this).val().toLowerCase();
  jQuery("#datatable-source tr").filter(function () {
      jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1)
  });
});