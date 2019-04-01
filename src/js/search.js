(function() {
    var data =  [
        {
            title: "Esteban",
            content: 43,
            link: "male"
        } , {
            title: "Zara",
            content: 65,
            link:  "female"
        }, {
            title: "Esteban Javier",
            content: 43,
            link: "male"
        } 
        ];

        results = [];
        for (i = 0; i < data.length; i++){
        var query = window.location.search.substring(1).split("=")[1].toLowerCase();
        var searchRes = document.getElementById("search-res");
        searchRes.innerHTML = "<h4> Resultados para " + query + ":</h4>";
        var printRes = document.getElementById("print-res");

        if (!data[i].title.toLowerCase().includes(query)) {
            console.log("else " + data[i].title)
            printRes.innerHTML = "<p>Lo sentimos no hay resultados para tu búsqueda.</p>";
        } else {
            console.log( "list " +data[i].title)
            printRes.innerHTML ="<h5>" + data[i].title + "</h5><br><p>" + data[i].content + "</p><br><a src='" + data[i].link+ "'>" + data[i].link+"</a>";
        }
    }
        
    })();

