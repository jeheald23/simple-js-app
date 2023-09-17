let pokemonList = [{
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
}];

pokemonList.forEach(function(item){
    document.write("<p>" + "Name: " + item.name + " Height: " + item.height + "m" + " Type: " + item.type);
});