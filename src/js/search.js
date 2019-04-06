window.onload = function() {
    var query = window.location.search.substring(1).split("=")[1].toLowerCase();
    var searchRes = document.getElementById("search-res");
    searchRes.innerHTML = "<h4> Resultados para " + query + ":</h4>";
    $(function () {
        $('#myInput').val(query);
      });
}

$(document).ready(function(){
    $("#myInput") .bind("keyup change", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

