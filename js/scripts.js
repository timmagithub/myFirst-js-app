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
