
//IIFE to keep this code from being accessed externally

let pokemonRepository = (function () {
    
  //creates an array of pokemon objects
    
  let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison']
    },

    {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
    },

    {
        name: 'Jigglypuff',
        height: 0.5,
        type: ['fairy', 'normal']
    },

    {
      name: 'Charmander',
      height: 0.6,
      types: ['fire']
  }
    ]; 
    
    // function to add pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
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
        
        //listens for a click and calls the function to console log pokemon
        
        button.addEventListener('click', function (event) {
        showDetails(pokemon);
        });
      }

      //function that console logs pokemon
      
      function showDetails(pokemon){
        console.log(pokemon)
      }

      // returns objects 
      
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };
    })();

    //allows the code in IIFE to be called externally
    
    pokemonRepository.getAll().forEach(function(pokemon){ 
      pokemonRepository.addListItem(pokemon)

    });
