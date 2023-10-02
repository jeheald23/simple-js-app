
//IIFE to keep this code from being accessed externally

let pokemonRepository = (function (){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

   
    
    // function to add pokemon
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    
    }
      //returns pokemon array
      function getAll() {
        return pokemonList;
      }

    //creates pokemon buttons
      
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        
      button.addEventListener('click', function (event) {
        showDetails(pokemon);
        });
      }

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
    
    async function loadDetails(item) {
    let url = item.detailsUrl;
    try {
         const response = await fetch(url);
         const details = await response.json();
         item.imageUrl = details.sprites.front_default;
         item.height = details.height;
         item.types = details.types;
       } catch (e) {
         console.error(e);
       }
  }
  
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function(){
      console.log(item.name, item.height)
    });

    let modalContainer = document.querySelector('#modal-container');
  
    function showModal(title, text, image) {
     modalContainer.innerHTML = '';
     let modal = document.createElement('div');
     modal.classList.add('modal');
    
     let closeButtonElement = document.createElement('button');
     closeButtonElement.classList.add('modal-close');
     closeButtonElement.innerText = 'Close';
     closeButtonElement.addEventListener('click', hideModal);
    
     let titleElement = document.createElement('h1');
      titleElement.innerText = title;
    let contentElement = document.createElement('p');
      contentElement.innerText = text;
    let imageElement = document.createElement('img');
      titleElement.innterText = image;
    
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
        
      modalContainer.classList.add('is-visible');
      }
    
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
    
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
        }
      });
        
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
      hideModal();
      }
    });
    
    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!');
    });
   }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
    };
  
  })();  
    
  pokemonRepository.loadList().then(function() {
      // Now the data is loaded!
      pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
      });
    });
