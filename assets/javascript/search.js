//$(document).ready()
//Note for after: attr("col-md-##") each element we create
let apiKey = "cWi7MCOpnLEpMLWBtKXD5nC6GAGqPnS2";


//IDs

//div 1: "#search-parameters"

//buttons:
//"#search"
//"#clear-results"
//div 2: "#top-articles" 

var top_articles = $("#top-articles");
var queryUrl = "";

$("#search").on("click", function () {
    event.preventDefault();

    //"#search-term"
    var search_term = $("#search-term")[0].value;
    //"#num-of-records"
    var num_of_records = $("#num-of-records").val();
    //"#start-year"
    var start_year = $("#start-year").val();
    //"#end-year"
    var end_year = $("#end-year").val();
    console.log("search clicked");
    console.log(search_term);
    //console.log(start_year.val());
    queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search_term}&api-key=${apiKey}`;
    //begin_date=${start_year}0000&end_date=${end_year}0000&
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i < response.response.docs.length; i++) {
            var article = $("<div>");
            article.attr("class", "article");
            console.log(response.response.docs[i].headline.main);
            article.text(response.response.docs[i].headline.main)
            top_articles.append(article);
        }


    });

    //});
    // clearing the input fields
    $("#clear-results").on("click", function () {
        search_term.val("");
        num_of_records.val("");
        start_year.val("");
        end_year.val("");

        //add in function to set all results to hide - maybe do .attr("class","results");  $(".results").hide
    });
});
