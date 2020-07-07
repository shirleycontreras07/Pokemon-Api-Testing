//document.addEventListener("DOMContentLoaded", () => {

//    let searchForm = document.getElementById("searchForm");
//    searchForm.addEventListener('submit', renderEverything2);
    
//});

//function renderEverything2() {
//    let allPokemonContainer = document.querySelector('#poke-container')
//    allPokemonContainer.innerText = "";
//    let criterio = document.getElementById("criterio").value();
//    fetchPokemon(criterio);

//    getDeleteBtn().style.display = 'block'
//}

//function fetchPokemon(criterio) {
//    console.log(criterio);
//    fetch('https://pokeapi.co/api/v2/pokemon/' + criterio + '/')
//        .then(response => response.json())
//        .then(function (allpokemon) {
//            allpokemon.results.forEach(function (pokemon) {
//                fetchPokemonData2(pokemon);
//            })
//        })
//}

//function fetchPokemonData2(pokemon) {
//    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
//    //Example: https://pokeapi.co/api/v2/pokemon/1/"
//    fetch(url)
//        .then(response => response.json())
//        .then(function (pokeData) {
//            renderPokemon(pokeData)
//        })
//    console.log(url);

//}

//const form = document.getElementById('searchForm');
//form.addEventListener('submit', pokeSubmit);

//function pokeSubmit() {
//    var param = document.getElementById("criterio").value;
//    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

//    $.getJSON(pokeURL, function (data) {
//        //console.log(data);
//        //console.log(JSON.stringify(data, null, "  "));

//        /*********** New Stuff ****************************/
//        var pokeID = data.national_id;
//        var pokeName = data.name;
//        var pokeType1 = data.types[0].name;
//        if (data.types.length == 2) {
//            var pokeType2 = data.types[1].name;
//        }
//        else var pokeType2 = null;

//        console.log("Number: ", pokeID);
//        console.log("Name: ", pokeName);
//        console.log("Type 1: ", pokeType1);
//        console.log("Type 2: ", pokeType2);
//        /*********** New Stuff ****************************/
//    });
//}