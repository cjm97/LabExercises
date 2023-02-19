// shift & unshift // push & pop 

// push shoves an element onto the end of an array
// pop removes an element from the end of an array

// unshift shoves an element to the start of an array
// shift removes an element from the beginning of an array



let fantasyNovels = [];
fantasyNovels.push("A Storm of Swords"); //["A Storm of Swords"]
fantasyNovels.push("The Way of Kings"); // ["A Storm of Swords", "The Way of Kings"]
fantasyNovels.unshift("A Game of Thrones"); // ["A Game of Thrones", A Storm of Swords", "The Way of Kings"]
fantasyNovels.push("Words of Radiance"); //  ["A Game of Thrones", A Storm of Swords", "The Way of Kings", "Words of Radiance"]
fantasyNovels.unshift("The Wheel of Time"); // ["The Wheel of Time", "A Game of Thrones", A Storm of Swords", "The Way of Kings", "Words of Radiance"]
fantasyNovels.shift(); // [ "A Game of Thrones", A Storm of Swords", "The Way of Kings", "Words of Radiance"]
fantasyNovels.pop(); // [ "A Game of Thrones", A Storm of Swords", "The Way of Kings"]
fantasyNovels.unshift(fantasyNovels[2]); // [ 'The Way of Kings", "A Game of Thrones", A Storm of Swords", "The Way of Kings"]
fantasyNovels.shift(); // ["A Game of Thrones", A Storm of Swords", "The Way of Kings"]

console.log(fantasyNovels);
console.log(fantasyNovels.indexOf('A Game of Thrones'));