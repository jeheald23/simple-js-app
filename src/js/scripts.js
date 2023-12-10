//IIFE to keep this code from being accessed externally

let pokemonRepository = (function () {


  // function to add pokemon
  pokemonRepository.loadList().then(function() {
    // code goes here
  });
})();
    // Add an event listener to each list item
    let listItems = document.querySelectorAll(".list-item");
    // Fixing the parsing error by removing the extra closing parenthesis and curly brace
    pokemonRepository.loadList().then(function() {
      // code goes here
      // code to show details goes here
    });

    listItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // showDetails function implementation goes here
        showDetails();
      });
    });

    function showDetails() {
      // implementation of showDetails function goes here
    }
  

    