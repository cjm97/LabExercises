// 1.
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

// 2.
let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?

let addition = three + four; // = 34 string concatenation
console.log(addition);
let multiplication = three * four; // = 12 - string converting to a number first
console.log(multiplication);
let division = three / four; // 3/4 = 0.75 - same as multiplicaton, string converted to number
console.log(division);
let subtraction = three - four; // = -1 same as multiplication/division
console.log(subtraction);

let lessThan1 = three < four; // true, string characters compared at each index
console.log(lessThan1);
let lessThan2 = thirty < four; // true, string characters compared at each index
console.log(lessThan2);

// 3.

if (0) console.log("#1 zero is true"); // 0 = false therefore message will not log
if ("0") console.log("#2 zero is true"); // non-empty string is considered truthy therefore message will log
if (null) console.log("null is true"); // null is considered falsy in JavaScript
if (-1) console.log("negative is true"); // truthy, any number that isn't 0 is truthy
if (1) console.log("positive is true"); // self-explanatory

// 4.

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log(result);

let x = 6,
  y = 5;
let result2 = `${x} + ${y} is `;

x + y < 10 ? (result2 += "less than 10") : (result2 += "greater than 10");

console.log(result2);

//5.

//function declaration
function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Chris"));

//function expression
const getGreeting2 = function (name) {
  return `Hello ${name}!`;
};

console.log(getGreeting2("Tim"));

//arrow function

const getGreeting3 = (name) => `Hello ${name}!`;
console.log(getGreeting3("Rose"));

//6.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?"
      : "Nice to meet you.",
};
inigo.greeting(westley);
inigo.greeting(rugen);

// getCatchPhrase(person) {
//     if (person.numFingers === 6) {
//         return "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?";
//     } else {
//         return "Nice to meet you.";
//     }
//   },

// 7.

const basketballGame = {
  score: 0,
  foulCount: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.foulCount ++;
    return this;
  },
  halfTime() {
    console.log(`Half time score is ${this.score}. The number of fouls is ${this.foulCount}`);
    return this;
  },
  fullTime(){
    console.log(`Full time score is ${this.score}. The number of fouls is ${this.foulCount}`);
    return this;
  }
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .foul()
  .foul()
  .basket()
  .threePointer()
  .halfTime()
  .basket()
  .basket()
  .basket()
  .basket()
  .freeThrow()
  .foul()
  .foul()
  .threePointer()
  .fullTime();

// 8.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const london = {
    name: 'London',
    population: 8_982_000,
    state: 'Greater London',
    founded: '47-410 AD',
    timezone: 'Greenwich Mean Time'
}

function cityStats(city){
    for (const stat in city) {
        console.log(`${stat}: ${city[stat]}`);
    }
}

cityStats(sydney);
cityStats(london);

// 9.
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
//9a
let moreSports = teamSports;  
moreSports.push("Basketball", "Swimming", "Golf")
moreSports.unshift("Tennis")

//9b
let dog2 = dog1;
dog2 = 'Fenrir';

//9c
let cat2 = cat1;
cat2.name = "Floofy";

//9d
console.log(moreSports);
console.log(teamSports);
console.log(dog1);
console.log(dog2);
console.log(cat1);
console.log(cat2);

//cat 2 and teamSports are both referencing the same underlying object (i.e. list of sports / name/breed value of cat), when we create a new variable (cat2/moreSports) and assign it to the existing initial object, both variables reference the same underlying object. Any changes made to either variable will affect the other variable. 

//9e

let moreSports2 = [...teamSports]; // shallow copy [] makes a new array spread {} makes a new object spread. 
moreSports2.shift();
moreSports2.pop();

const cat3 = { ...cat1 }; //shallow copy 
cat3.name = "Flappy";
console.log(teamSports);
console.log(moreSports2); // 
console.log(cat3);
console.log(cat2);


//10.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function() {
    return this.age > 16;
  }
  }

  let person1 = new Person("Tim", 14);
  let person2 = new Person("Chris", 25);

  console.log(person1);
  console.log(person1.name);
  console.log(person1.age);
  console.log(person2);
  console.log(person2.name);
  console.log(person2.age);

  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
      this.canDrive = function (){
        return this.age > 16;
      }
    }
  }
  
  let person3 = new PersonClass("Rose", 26)
  console.log(person3);

  console.log(person1.canDrive());
  console.log(person2.canDrive());
  console.log(person3.canDrive());