// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings

const ucFirstLetters = (string) => {
  let words = string.split(" ");
  console.log(words);
  let newPhrase = "";
  for (i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      newPhrase =
        newPhrase +
        words[i].slice(0, 1).toUpperCase() +
        words[i].slice(1) +
        ".";
    } else {
      newPhrase =
        newPhrase +
        words[i].slice(0, 1).toUpperCase() +
        words[i].slice(1) +
        " ";
    }
  }
  return newPhrase;
};
console.log(ucFirstLetters("los angeles"));

// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

// a)
const truncate = (str, max) => {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str.slice(0, max);
  }
};
console.log(truncate("hello world", 6));
console.log(truncate("hello world", 11));

//b)

const truncate2 = (str, max) =>
  str.length > max ? str.slice(0, max) + "..." : str.slice(0, max);

console.log(truncate2("hello world", 6));
console.log(truncate2("hello world", 11));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case

const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a) Add 2 new values to the end

animals.push("Hippo", "Lion");
console.log(animals);

// b) Add 2 new values to the beginning
animals.unshift("Turtle", "Leopard");
console.log(animals);

// c) Sort the values alphabetically
animals.sort();
console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue

const replaceMiddleAnimal = (newAnimal) => {
  animals.splice(animals.length / 2, 1, newAnimal);
  return animals;
};

console.log(replaceMiddleAnimal("Cat"));

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const findMatchingAnimals = (beginsWith) => {
  let string = beginsWith.toLowerCase();
  const newAnimals = animals.filter((animal) =>
    animal.toLowerCase().includes(string)
  );

  return newAnimals;
};

console.log(findMatchingAnimals("e"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// for loop
const camelCase = (cssProp) => {
  let split = cssProp.split("-");
  let camelCaseWord = "";
  for (let i = 0; i < split.length; i++) {
    if (i === 0) {
      camelCaseWord += split[i];
    } else {
      camelCaseWord += split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
    }
  }
  return camelCaseWord;
};

console.log(camelCase("margin-left"));

// while loop
const camelCase2 = (cssProp) => {
  let split = cssProp.split("-");
  let camelCaseWord = "";
  camelCaseWord += split[0];
  let i = 1;
  while (i < split.length) {
    camelCaseWord += split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
    i++;
  }
  return camelCaseWord;
};
console.log(camelCase2("margin-left-right-goodnight"));

//conditional operator
const camelCase3 = (cssProp) => {
  let split = cssProp.split("-");
  let camelCaseWord = "";
  for (let i = 0; i < split.length; i++) {
    camelCaseWord +=
      i === 0
        ? split[i]
        : split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
  }
  return camelCaseWord;
};

console.log(camelCase3("margin-right"));

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);

// a) Explain why the above code returns the wrong answer
// calling the .toFixed() method on each variable changes it to a string.
console.log(typeof fixedTen);
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

const currencyAddition = (float1, float2) => {
  let fixedFloat1 = float1.toFixed(2) * 100;
  let fixedFloat2 = float2.toFixed(2) * 100;
  return (fixedFloat1 + fixedFloat2) / 100;
};
console.log(currencyAddition(0.2, 0.4));
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

const currencyOperation = (float1, float2, operation) => {
  let fixedFloat1 = float1.toFixed(2) * 100;
  let fixedFloat2 = float2.toFixed(2) * 100;
  switch (operation) {
    case "*":
      return ((fixedFloat1 / 100) * fixedFloat2) / 100;
      break;
    case "/":
      return fixedFloat1 / 100 / (fixedFloat2 / 100);
      break;
    case "+":
      return (fixedFloat1 + fixedFloat2) / 100;
      break;
    case "-":
      return fixedFloat1 / 100 - fixedFloat2 / 100;
      break;
    default:
      return "Please enter a valid operation";
  }
};

console.log(currencyOperation(0.1, 0.2, "+"));
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true
// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
const currencyOperation2 = (float1, float2, operation, numDecimals) => {
  let fixedFloat1 = float1 * 100;
  let fixedFloat2 = float2 * 100;
  switch (operation) {
    case "*":
      return (fixedFloat1 / 100 * fixedFloat2 / 100).toFixed(numDecimals);
      break;
    case "/":
      return (fixedFloat1 / 100 / fixedFloat2 / 100).toFixed(numDecimals);
      break;
    case "+":
      return (fixedFloat1 / 100 + fixedFloat2 / 100).toFixed(numDecimals);
      break;
    case "-":
      return (fixedFloat1 / 100 - fixedFloat2 / 100).toFixed(numDecimals);
      break;
    default:
      return "Please enter a valid operation";
  }
};


// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.

const unique = (duplicatesArray) => {
  newArray = [];
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (newArray.indexOf(duplicatesArray[i]) === -1){ //checks to see if each item is in the new array already.
      newArray.push(duplicatesArray[i]);
    }
  }
  return newArray;
};
// Test with the following arrays and create another one of your own.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
{ id: 6, title: 'A Game of Thrones', author: 'George R.R. Martin', year: 1997}
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
const getBookTitle = (bookId) => {
  const book = books.find(book => book.id === bookId);
  return book ? book.title : null;
};
console.log(getBookTitle(5));

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

const getOldBooks = () => books.filter(book => book.year < 1950);
console.log(getOldBooks());
// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
const addGenre = (genre) => books.map(book => {
  return { ...book, genre: "Classic"};
});

console.log(addGenre("Classic"));


// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

const getTitles = (authorInitial) => {
  books.map(book => {
    return {...book, Initials: books.author.slice(0,1)};
  });
}

console.log(getTitles());
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.
