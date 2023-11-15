
//IIFE to keep this code from being accessed externally

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let searchInput = document.querySelector("#searchIn");


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
    listItem.classList.add('list-group-item');
    listItem.innerText = pokemon.name;
    let button = document.createElement('button');
    button.className = ('btn btn-info');
    button.setAttribulte = ('data-target','#modal')
    button.setAttribute=('data-toggle', 'modal')
    button.innerText = ('get information');
  
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
      item.weight = details.weight;
      item.types = details.types;
      item.abilities = details.abilities;
  } catch (e) {
      console.error(e);
    };
  
  }


  function showDetails(item) {
    console.table(item)
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header")

    modalTitle.empty()
    modalBody.empty()

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElement = $('<img-class="modal-img" style="width:50%">');
    imageElement.attr("<src>", item.imageUrl);
    let heightElement = $("<p>" + "height: " + item.height + "</p>");
    let weightElement = $("<p>" + "weight: " + item.weight + "</p>");
    let typesElement = $("<p>" + "types: " + item.types + "</p>");
    let abilitiesElement = $("<p>" + "abilities: " + item.abilities + "</p>")

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
   $('#exampleModal').modal("toggle")
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (loadDetails) {
      pokemonRepository.addListItem(loadDetails); {
      };
    });
  });
