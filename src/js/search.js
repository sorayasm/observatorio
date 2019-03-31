(function() {
    var json = {
        "people": {
            "person": [{
                "name": "Peter",
                "age": 43,
                "sex": "male"},
            {
                "name": "Zara",
                "age": 65,
                "sex": "female"}]
        }
    };
    
    $.each(json.people.person, function(i, query) {
        var query = window.location.search.substring(1).split("=")[1];
        console.log(query);
    
        var searchRes = document.getElementById("search-res");
        searchRes.innerHTML = "<h4> Resultados para " + query + " :</h4>"

        var printRes = document.getElementById("print-res");
        if (query == "Peter") {
            printRes.innerHTML = "<p>hola Peter</p>"
        } else {
            printRes.innerHTML = "<p>Lo sentimos no hay resultados para tu búsqueda.</p>"
        }
    });

})();

