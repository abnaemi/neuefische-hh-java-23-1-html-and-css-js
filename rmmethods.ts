
function getAllHumansAlive(characters: { status: string, species: string }[]) {
    return characters.filter(character => {
        return character.status === "Alive" && character.species === "Human"
    })
}

const charactersAlive = getAllHumansAlive(response.results)
console.log(charactersAlive)

function getAllCharactersNames(characters: { name: string }[]) {
    return characters.map(character => {
        return character.name
    })
}

const allCharacters = getAllCharactersNames(response.results)
console.log(allCharacters)

function getAllCharactersAsObject(characters: { name: string, origin: { name: string } }[]) {
    return characters.map(character => {
        return {name: character.name, origin: character.origin.name}
    })
}

const characters = getAllCharactersAsObject(response.results)
console.log(characters)