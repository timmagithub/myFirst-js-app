let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=1118";function n(e){"object"==typeof e&&"name"in e?t.push(e):console.log("pokemon is not correct")}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=[];for(var n=0;n<e.types.length;n++)t.types.push(e.types[n].type.name)}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){console.log(t),l(t)})}function l(t){let e=$(".modal-body"),n=$(".modal-title");n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),i=$("<p>Height: "+t.height+"</p>"),l=$("<p>Types: "+t.types+"</p>"),a=$('<img class="modal-img" style="width:33%">');a.attr("src",t.imageUrl),n.append(o),e.append(i),e.append(l),e.append(a)}return{add:n,getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".list-group"),n=document.createElement("li");n.classList.add("list-group-item","list-group-item-action");let o=document.createElement("button");o.innerText=t.name,o.classList.add("btn","btn-block"),o.setAttribute("data-target","#detailsModal"),o.setAttribute("data-toggle","modal"),n.appendChild(o),e.appendChild(n),o.addEventListener("click",()=>{i(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i,showModal:l}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})}),fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118").then(function(t){return t.json()}).then(function(t){console.log(t)}).catch(function(){});