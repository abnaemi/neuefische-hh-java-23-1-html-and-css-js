function getAllHumansAlive(characters) {
    return characters.filter(function (character) {
        return character.status === "Alive" && character.species === "Human";
    });
}
var charactersAlive = getAllHumansAlive(response.results);
console.log(charactersAlive);
function getAllCharactersNames(characters) {
    return characters.map(function (character) {
        return character.name;
    });
}
var allCharacters = getAllCharactersNames(response.results);
console.log(allCharacters);
function getAllCharactersAsObject(characters) {
    return characters.map(function (character) {
        return { name: character.name, origin: character.origin.name };
    });
}
var characters = getAllCharactersAsObject(response.results);
console.log(characters);
