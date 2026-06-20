// https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var AIP_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("searchbar");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function() {
    // get user typr data
    //use user type data in the query
    // make an api call to the backend
    //append the suggestions to the data div tagin the UI
    var query = searchBar.value.trim();
console.log(query);
fetchSuggestions(query);
    
})
function fetchSuggestions(query) {
    var fullAPI= AIP_URL+"?q="+query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        showSuggestions(data);
return;
})
    .catch(function(err) {
        console.log("Error : "+ err);
    })
}
function showSuggestions(data) {
var values = data.results;
if (data.count == 0 ){
    searchSuggestions.innerHTML = "<div>No matching results found</div>";
}
else {
    var htmlString = "";
    for (var i=0; i<values.length; i++) {
        htmlString += "<div class='suggestion-item'>" + values[i].text +"</div>";
    }
    searchSuggestions.innerHTML = htmlString;
}
searchSuggestions.innerHTML = htmlString;
}