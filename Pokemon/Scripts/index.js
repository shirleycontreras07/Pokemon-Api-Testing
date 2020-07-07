document.addEventListener("DOMContentLoaded", () => {
    
    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn.addEventListener('click', renderEverything);
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', pokeSubmit);
    getDeleteBtn().addEventListener('click', deleteEverything);
});



function pokeSubmit() {
    var param = document.getElementById("criterio").value;
    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

    $.getJSON(pokeURL, function (data) {
        //console.log(data);
        //console.log(JSON.stringify(data, null, "  "));

        /*********** New Stuff ****************************/
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;

        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
        /*********** New Stuff ****************************/
    });
}
function renderEverything() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();

    getDeleteBtn().style.display = 'block'
}

function fetchPokemon(criterio) {
    console.log(criterio);
    fetch('https://pokeapi.co/api/v2/pokemon/' + criterio + '/')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon);
            })
        })
}

//Crear una funcion que me permita buscar los datos referentes al pokemon que quiero buscar
function fetchKantoPokemon() {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon);
            })
        })
}

function fetchPokemonData(pokemon) {
        let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
        //Example: https://pokeapi.co/api/v2/pokemon/1/"
        fetch(url)
            .then(response => response.json())
            .then(function (pokeData) {
                renderPokemon(pokeData)
            })
    console.log(url);
    
}

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4');

    pokeName.innerText = ' Nombre: ' + pokeData.name + ' | ' + 'Numero: ' + `${pokeData.id}`;

    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types
    createTypes(pokeData.types, pokeTypes) // helper function to go through the types array and create li tags for each one

    let pokeHeight = `${pokeData.height}` / 10;
    let pokeWeight = `${pokeData.weight}` / 10;

    let pokeHeightDetails = document.createElement('p');
    let pokeWeightDetails = document.createElement('p');
    let tipos = document.createElement('p');
    pokeHeightDetails.innerText = ' Altura: ' + pokeHeight + ' metros';
    pokeWeightDetails.innerText = 'Peso: ' + pokeWeight + ' kilogramos';
    tipos.innerText = 'Tipo: ';
    pokeContainer.append(pokeName, pokeHeightDetails, pokeWeightDetails, tipos, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image');

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function deleteEverything(event) {
    event.target.style = 'none';
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate Pokemon"
    generateBtn.id = 'generate-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderEverything);

    allPokemonContainer.append(generateBtn)
}
