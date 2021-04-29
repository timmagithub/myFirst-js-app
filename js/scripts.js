/* Ver 1.1
first rendition of code. didn't want to disregard.

let pokemonList = [
    { name: 'Charmander', height: 0.6, types: ['fire', 'none']},
    { name: 'Krabby', height: 0.4, types: ['water', 'none']},
    { name: 'Venomoth', height: 1.5, types: ['bug', 'poison']}
];

/the loop below will operate in the browser, writing the names and 
heights of the pokemon until the array has run out./
for (let i=0; i<pokemonList.length; i++) {
    if (pokemonList[i].height>1) {
    document.write(pokemonList[i].name + ' (height: ' + 
    pokemonList[i].height + '). Wow! That\'s a big one! ')
    }
    else document.write(pokemonList[i].name + ' (height: ' + 
    pokemonList[i].height + '). ')
}
*/



/* Ver1.2 */

    /* list inside function wrapped in IIFE. this cements the list as 
    local variables, accessed and modified through extreme, deliberate, 
    means. */
let pokemonRepository = (function() {
    let pokemonList = [
      { name: 'Charmander', height: 0.6, types: ['fire', 'none']},
      { name: 'Krabby', height: 0.4, types: ['water', 'none']},
      { name: 'Venomoth', height: 1.5, types: ['bug', 'poison']}
    ]
  
    /* function.getAll to display the info from the selected array when 
    called. */
    function getAll() {
      return pokemonList;
    }
    /* function.add to add a new pokemon, .push to place the object at 
    the end of the array, and an if statement checking the typeof item 
    to verify it's an object. another if statement verifying that the 
    item has the same object keys as the pokemonList. */
    function add(item) {
      pokemonList.push(item);
      if(typeof item === object ? add : 'Not an object');
      if(Object.keys(item) === Object.keys(pokemonList) ? add : 
      'Not conforming keys');
    }

    /* functions to log the pokemon details in the console log on 
    the eventListener of the mouse click. */
    function logEvent(button, pokemon) {
        button.addEventListener('click', function showDetails() {
            console.log(pokemon);
        }) 
    }

    /*function to create a list of buttons with the pokemon's names on them
    and add it to the DOM*/
    function addListItem(pokemon){
        let listElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
    
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonbutton');


     /* one way of doing eventListener for element, but best practice
     is to define as own function: 
     button.addEventListener('click', showDetails);*/
    
        listItem.appendChild(button);
        listElement.appendChild(listItem);

        logEvent(button, pokemon);
    }

    /* return to make the output of the functions callable to an 
    outside function or variable. */
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    }
  
  })();
  
  
    /*calling the funcion for displaying the buttons with pokemon 
    on the homepage. */
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
  
    /*function to add the exclamatory text to qualifying pokemon.
pokedex.forEach(function(pokemon) {
    document.write(pokemon.height > 1 ? 'Wow, that is a big one!' : '');
    let listElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokedex.name;
    button.classList.add(pokemon-button);

    listItem.appendChild(button);
    listElement.appendChild(listItem);
  });
*/


 