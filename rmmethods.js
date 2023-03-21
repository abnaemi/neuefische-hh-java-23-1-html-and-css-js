function humanIsLiving(character) {
    return character.status === 'Alive' && character.species === 'Human';
}
function getLivingHumans(characters) {
    return characters.results.filter(humanIsLiving);
}
var livingHumans = getLivingHumans(characters);
console.log(livingHumans);
// Lambda Function erstellt von ChatGPT kp obs klappt
//
// function getLivingHumans(characters) {
//     return characters.results.filter(character => {
//         return character.status === 'Alive' && character.species === 'Human';
//     });
// }
//
// const livingHumans = getLivingHumans(characters);
// console.log(livingHumans);
