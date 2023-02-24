const n = 1.23456;
console.log(n.toFixed(2));
console.log(n);

let amount = 25.3333333;
console.log(Number(amount.toFixed(2)));

let pi = 3.14159;

console.log(parseInt(pi));

//string truncation
const truncate = (fullString, maxChars) =>
  fullString.length <= maxChars
    ? fullString
    : fullString.substring(0, maxChars) + "...";

let quickFox = "the quick brown fox jumps over the lazy dog.";
let longerString =
  "this string is relatively longer than the string entitled 'quick fox' in that I tend to ramble on and on needlessley, without consideration of utilising a full-stop - this is horrible punctuation, honestly, and anyone forced to read such a long-winded sentence should have anyone's pity at a minimum, apologies for subjecting you to this literary nightmare ";
// const truncate = (fullString, maxChars) => fullString.substring(0, maxChars);

console.log(truncate(quickFox, 44));

//function to count the words in a string

const wordCount = (string) => (words = string.split(" ").length);

console.log(wordCount(quickFox));
console.log(wordCount(longerString));


const author = {
    name: "Brandon Sanderson",
    location : "Utah",
    booksWritten: 54,
    toString() {
        return `Name: ${this.name}, Location: ${this.location}, Books Written: ${this.booksWritten}`
    }
}

console.log('Author Profile - ' + author);

// object with numbers

const bookProduct = {
  name: "The Way of Kings",
  author: "Brandon Sanderson",
  price: 18.00,
  discount_percent: 20,
  valueOf(){
    return this.price - (this.price * (this.discount_percent/100));
  },
  toString(){
    return `${this.name} by ${this.author} is usually priced at ${this.price} dollars. With the ${this.discount_percent} percent discount it is now priced at ${this.valueOf()} dollars.`;
  }
}
const bookProduct2 = {
  name: "The Name of the Wind",
  author: "Patrick Rothfuss",
  price: 22,
  discount_percent: 10,
  valueOf(){
    return this.price - (this.price * (this.discount_percent/100));
  },
  toString(){
    return `${this.name} by ${this.author} is usually priced at ${this.price} dollars. With the ${this.discount_percent} percent discount it is now priced at ${this.valueOf()} dollars.`;
  }
}

console.log(bookProduct);
console.log(bookProduct.valueOf());
console.log(bookProduct.toString());
console.log(`${bookProduct} 5 copies of ${bookProduct.name} will cost $ ${(bookProduct * 5)}`)

console.log(`The cost of a copy of ${bookProduct.name} and a copy of ${bookProduct2.name} is ${bookProduct.valueOf() + bookProduct2.valueOf()}`);


const billion = 1e9;
const microSeconds=1e-6;

console.log(billion);
console.log(microSeconds)
console.log (0xFFFFFF);



const sandoBooks = ['The Way of Kings', 'Words of Radiance', 'Oathbringer', 'Rhythm of War'];
const grrmBooks = ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords', 'A Feast for Crows'];

// push and pop work on the end of an array

sandoBooks.push("A Dance with Dragons"); //adds to end of array
console.log(sandoBooks);
sandoBooks.pop(); //removes last item in array
console.log(sandoBooks);

//shift and unshift from the beginning of an array;
grrmBooks.unshift("A Knight of the Seven Kingdoms"); //adds item to beginning of an array
console.log(grrmBooks);
grrmBooks.shift();
console.log(grrmBooks); //remmoves first item
grrmFirstBook = grrmBooks.shift();
console.log(grrmFirstBook);
console.log(grrmBooks);


const bestBooks = sandoBooks.concat(grrmBooks);
console.log(bestBooks.toString());

console.log(bestBooks.includes(""));

bestBooks.splice(3, 0, "Mistborn");
console.log(bestBooks);

//for each syntax

// arr.forEach(function(item, index, array) {
//  
// });




bestBooks.forEach(book => console.log(book));


const people = [
  {firstName: 'Wendy', lastName:'Darton', age: 52, location: 'QLD'},
  {firstName: 'Teddy', lastName:'Bear', age: 4, location: 'TAS'},
  {firstName: 'Tom', lastName:'Lee', age: 32, location: 'VIC'},
  {firstName: 'Stevie', lastName:'Simms', age: 30, location: 'ADL'},
  {firstName: 'Billy', lastName:'Bob', age: 64, location: 'VIC'}
]

people.forEach((person) => console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`));

people.forEach((person, index) => {
  console.log(index);
  console.log(person.name);
  console.log(person.location);
  console.log(person.age);
})

let vicPerson = people.filter(person => person.location == "VIC");
console.log(vicPerson);


let sPerson = people.find(person => person.firstName.startsWith('S'));
console.log(sPerson);

let olderPeople = people.map(person => ({...person, age: person.age+1 }));
console.log(olderPeople);

console.log("sort by age alphabetically")

people.sort((person1, person2) => {
  if (person1.age == person2.age) return 0;
  if (person1.age > person2.age) return 1;
  return -1;
});
console.log(people);


console.log("sort by firstName alphabetically")

people.sort((person1, person2) => {
  if (person1.firstName == person2.firstName) return 0;
  if (person1.firstName > person2.firstName) return 1;
  return -1;
}
);
console.log(people);


console.log("sort by location alphabetically")

people.sort((person1, person2) => {
  if (person1.location == person2.location) return 0;
  if (person1.location > person2.location) return 0;
  return -1;
});
console.log(people);


// console.log(olderPeople.age>60 ? "there are people older than 60" : "there is no one older than 60");

