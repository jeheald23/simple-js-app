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

let bigText = " -- Wow, that's a big one!";

for(i=0; i<pokemonList.length; i++){
    if(pokemonList[i].height >= 1.0){
        document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) ${bigText} <br />`);
    } else {
        document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br />`);
    } 
}