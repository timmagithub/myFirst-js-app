/* Ver1.2   Notes numbered and at very bottom of code*/

//pokemonRepository
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118';
  
    //add
    function add(pokemon) {  
        if(typeof pokemon === 'object' &&
            'name' in pokemon
        )   {
            pokemonList.push(pokemon);
        } else (
            console.log('pokemon is not correct')
        )    
    }    

    //getAll
    function getAll() {
        return pokemonList;
      }

    //addListItem
    function addListItem(pokemon){
        let listElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonbutton');
        listItem.appendChild(button);
        listElement.appendChild(listItem);
        button.addEventListener('click', () => {
          showDetails(pokemon);
        });
        }

    //loadList
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
    }    
    //loadDetails
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        })
    }    
    //showDetails
      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
          showModal(pokemon);
        });
        }

      // modalContainer    
      let modalContainer = document.querySelector('.modal-container');
      // showModal  
      function showModal(pokemon) { 
          modalContainer.innerHTML = '';
          
        let modal = document.createElement('div');
          modal.classList.add('modal');
    
        let closeButtonElement = document.createElement('close-button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('close', hideModal)
    
        let nameElement = document.createElement('h3');
          nameElement.innerText = pokemon.name;
    
         let heightElement = document.createElement('p');
          heightElement.innerText = pokemon.height;
          
        let typesElement = document.createElement('p');
          typesElement.innerText = pokemon.types;

        let imgElement = document.createElement('img')
          imgElement.src = pokemon.imageUrl;  

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(heightElement);
        modal.appendChild(typesElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);
  
        modalContainer.classList.add('is-visible');
       }  
      //hideModal
       function hideModal() {
         modalContainer.classList.remove('is-visible');
       }

       window.addEventListener('keydown', (e) => {
         if (e.key === 'Escape' && modalContainer.classlist.contains('is-visible')) {
           hideModal();
         }
       })

       modalContainer.addEventListener('click', (e) => {
         let target = e.target;
         if (target === modalContainer) {
           hideModal();
         }
       });
      
    //return
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
    
})();
  
  
//pokemonRepository promise
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
 
//pokemonapi fetch
fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118').then(function (response) {
  return response.json(); 
}).then(function (pokemonList) {
  console.log(pokemonList); 
}).catch(function () {
});












  /*Ver 1.1
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

    /* Function removed because it was no longer needed.
    
    function to add the exclamatory text to qualifying pokemon.
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

    //logEvent
 //   function logEvent(button, pokemon) {
   //     button.addEventListener('click', function showDetails() {
     //       console.log(pokemon);
       // }) 
   // }

   //       logEvent(button, pokemon);

*/

/* Notes:

pokemonRepository-   list inside function wrapped in IIFE. this cements the list as 
    local variables, accessed and modified through extreme, deliberate, 
    means. 

add-   function.add to add a new pokemon, .push to place the object at 
    the end of the array, and an if statement checking the typeof item 
    to verify it's an object. another if statement verifying that the 
    item has the same object keys as the pokemonList. 

getAll-   function.getAll to display the info from the selected array when 
    called. 

logEvent-   functions to log the pokemon details in the console log on 
    the eventListener of the mouse click. 

addListItem-   function to create a list of buttons with the pokemon's names on them
    and add it to the DOM. added button event listener to log the pokemon 
    name and details in the console.log

loadList-   function to create a list of pokemon 

loadDetails-  promise to load a list of data for the addListItem to put into
    the array

showDetails- functional promise to display the details for each pokemon
    in the console log once the event listener in addListItem is invoked

return-   return to make the output of the functions callable to an 
    outside function or variable. 

pokemonRepository promise- 

modalContainer- retrieving HTML tag for modal

showModal- modal to display pokemon infortmation on the screen

hideModal- function to hide the modal and event listeners to activate 

poekmonapi fetch- got some pokemon for my empty array

*/

