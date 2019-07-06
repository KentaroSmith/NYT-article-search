$(document).ready()
//Note for after: attr("col-md-##") each element we create
let apiKey = "cWi7MCOpnLEpMLWBtKXD5nC6GAGqPnS2";
let

//IDs

//div 1: "#search-parameters"
//"#search-term"
var search_term = $("#search-term").val();
//"#num-of-records"
var num_of_records = $("#num-of-records").val();
//"#start-year"
var start_year = $("#start-year").val();
//"#end-year"
var end_year = $("#end-year").val();
//buttons:
//"#search"
//"#clear-results"
//div 2: "#top-articles" 

var top_articles = $("#top-articles");

$("#search").on("click", function () {
    let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search_term + "&api-key=" + apiKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    });

})
// clearing the input fields
$("#clear-results").on("click", function () {
    search_term.val() = '';
    num_of_records.val() = '';
    start_year.val() = '';
    end_year.val() = '';

    //add in function to set all results to hide - maybe do .attr("class","results");  $(".results").hide
});

