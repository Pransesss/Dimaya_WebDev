export async function getPokemon(name) {
    var response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
 
    if (!response.ok) {
        return null;
    }
 
    var data = await response.json();
    return data;
}