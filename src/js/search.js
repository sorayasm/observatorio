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
        searchRes.innerHTML = "<h4> Resultados para " + query + ":</h4>"

        if (data[i].title.toLowerCase().includes(query)) {
            console.log(data[i].title)
            var link = data[i];
            results.push(link);
            
            for(i = 0; i < results.length; i++) {
                var printRes = document.getElementById("print-res");
                printRes.innerHTML =  results[i].title ;
                //"<h5>" + results[i].title + "</h5><br><p>" + results[i].content + "</p><br><a src='" + results[i].link+ "'>" + results[i].link+"</a>";
            }
        } else {
            console.log(data[i].title)
            printRes.innerHTML = "<p>Lo sentimos no hay resultados para tu búsqueda.</p>"
        }
    }
        
    })();

