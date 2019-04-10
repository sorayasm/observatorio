
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../assets/data/search.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

function create() {    
        loadJSON(function(json) {
        const data = json; // this will log out the json object
        for(var i = 0; i < data.length; i++) {
            var printRes = document.getElementById("results");
            printRes.innerHTML +=  "	<li class='list-group-item'><a href="+data[i].link+"><h6>"+data[i].title+"</h6> </a><p>"+data[i].content+"</p><a href="+data[i].link+">Ver más...</a></li>";
            }   
    });
}

$(document).ready(function(){
var query = window.location.search.substring(1).split("=")[1].toLowerCase();
var searchRes = document.getElementById("search-res");
searchRes.innerHTML = "<h4> Resultados para " + query + ":</h4>";
$(function () { $('#inputSearch').val(query);  });

create();
});

$("#inputSearch").on("keyup", function() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("results");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
            printNoRes.style.display = "none";
        } else {
            li[i].style.display = "none";
            var printNoRes = document.getElementById("noresults");
            printNoRes.innerHTML =  "	<p>Lo sentimos, no hay resultados para tu búsqueda. Intenta de nuevo por favor.</p>";

        }
    }
})