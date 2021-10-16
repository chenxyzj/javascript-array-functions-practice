const { checkPrime } = require("crypto");

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map(a => a.name);
console.log(allNames);
//2. Get array of all heights
const allHeights = characters.map(a => a.height);
console.log(allHeights);
//3. Get array of objects with just name and height properties
const objectsWithNameHeight = characters.map(a => ({name:a.name, height: a.height}));
console.log(objectsWithNameHeight);
//4. Get array of all first names
const firstNames = characters.map(a => a.name.split(" ")[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc,a) => acc + a.mass,0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, a) => acc + a.height,0);
console.log(totalHeight);
//3. Get total number of characters by eye color
const totalByEyeColor = characters.reduce((acc, a) => {
    if(acc[a.eye_color]) acc[a.eye_color] ++;
    else acc[a.eye_color] = 1;
    return acc;
},{});
console.log(totalByEyeColor);
//4. Get total number of characters in all the character names
const totalChars = characters.reduce((acc,a) => acc + a.name.length,0);
console.log(totalChars);

//***FILTER***
//1. Get characters with mass greater than 100
const greaterThan = characters.filter((a) => a.mass > 100);
console.log(greaterThan);
//2. Get characters with height less than 200
const lessThan = characters.filter((a) => a.height < 200);
console.log(lessThan);
//3. Get all male characters
const allMale = characters.filter((a) => a.gender === 'male');
console.log(allMale);
//4. Get all female characters
const allFemale = characters.filter((a) => a.gender === 'female');
console.log(allFemale);


//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a,b) => b.mass - a.mass);
console.log(sortByMass);
//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortByHeight);
//3. Sort by name
const sortByName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    else return 1;
});
console.log(sortByName);
//4. Sort by gender
const sortByGender = characters.sort((a, b) => a.gender === 'male' ? -1 : 1);
console.log(sortByGender);


//***EVERY***
//1. Does every character have blue eyes?
const everyBlue = characters.every((character) => {
    return character.eye_color === 'blue';
});
console.log(everyBlue);

//2. Does every character have mass more than 40?
const everyMoreThan40 = characters.every(character => character.mass > 40);
console.log(everyMoreThan40);
//3. Is every character shorter than 200?
const everyShorterThan200 = characters.every(ch => ch.height < 200);
console.log(everyShorterThan200);
//4. Is every character male?
const everyMale = characters.every(ch => ch.gender === 'male');
console.log(everyMale);

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some((character) => {
    return character.gender === 'male';
});
console.log(oneMale);
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) =>{
    return character.eye_color === 'blue';
});
console.log(oneBlueEyes);
//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => {
    return character.height > 202;
});
console.log(oneTallerThan210);
//4. Is there at least one character that has mass less than 50?
const oneLessThan50 = characters.some( character => character.mass < 50 );
console.log(oneLessThan50);
