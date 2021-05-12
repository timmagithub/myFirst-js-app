/* Ver1.2   */

//pokemonRepository
let pokemonRepository = (function() {
  let pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118';

  /* add pokemon to empty array */
  function add(pokemon) {  
      if(typeof pokemon === 'object' &&
          'name' in pokemon
      )   {
          pokemonList.push(pokemon);
      }    
  }    

  /* return pokemonList for accessiblity */
  function getAll() {
      return pokemonList;
    }

  /* creating list of active buttons that open modal with the pokemon names on them */
  function addListItem(pokemon){
      let listElement = document.querySelector('.list-group');
      let listItem = document.createElement('li');
      
      listItem.classList.add('list-group-item', 'list-group-item-action');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('btn', 'btn-block');
      button.setAttribute('data-target', '#detailsModal');
      button.setAttribute('data-toggle', 'modal');

      listItem.appendChild(button);
      listElement.appendChild(listItem);
      button.addEventListener('click', () => {
        showDetails(pokemon);
      });
      }

  /* load list of information from API */
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
        alert.error(e);
      })
  }    
  /* make the details accessable */
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
      return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = [];
        for (var i=0; i<details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      }).catch(function (e) {
        alert.error(e);
      })
  }    
  /* load details to apply to modal */
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
      }

    /* create the content of the modal and append it to the html */  
    function showModal(pokemon) { 
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalTitle.empty();
      modalBody.empty();

      let nameElement = $('<h1>' + pokemon.name + '</h1>');
  
      let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        
      let typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>');

      let imgElement = $('<img class="modal-img" style="width:50%">');
      imgElement.attr('src', pokemon.imageUrl);  

      modalTitle.append(nameElement);
      modalBody.append(heightElement);
      modalBody.append(typesElement);
      modalBody.append(imgElement);

      
    }  
    
  /* return to make functions accessible */
  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
  }
  
})();


/* asynchronous promise to display pokemonRepository */
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});

/* poekmonapi fetch- got some pokemon for my empty array */
fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118').then(function (response) {
return response.json(); 
});








