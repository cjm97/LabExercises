let homeScore = 2;
let awayScore = 3;

let result;
if (homeScore > awayScore) {
    result = 'The Home team wins!'
} else {
    result = 'The away team wins!'
}

console.log(result);

let result2 = homeScore > awayScore ? "The home team wins" : "The away team wins";

console.log(result2);

let stringOne = "Aab";
let stringTwo = "AaB";

console.log(stringOne > stringTwo);

// function declaration 
function getBMI(weight, height) {
    let BMI = weight/(height*height);
    if (BMI < 18.5) {
        return `Underweight, your BMI is ${BMI}`;
    } else if (BMI > 18.5 && BMI < 24.9) {
        return `Healthy weight, your BMI is ${BMI}`;
    } else if (BMI > 25 && BMI < 29.9) {
        return `Overweight, your BMI is ${BMI}`;
    } else {
        return `Obese range, your BMI is ${BMI}`;
    }
}

console.log(getBMI(90, 1.84));
// arrow function
const getBMI2 = (weight, height) => weight/height**2;

console.log(getBMI2(84, 1.84));

// function declaration vs function expression

functionDeclaration("Tim")
function functionDeclaration(name){
    console.log(`Hello ${name}`);
}

const functionExpression = function(name) {
    console.log(`Hello ${name}`);
}
functionExpression("James") // can only be called after function expression is created, if this were placed on line 48 and error would occur. 


//objects

const person = {
    name: ["Bob", "Smith"],
    'first-name': "Bob",
    lastName: "Smith",
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  

console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
person.bio();
person.introduceSelf();
console.log(person['first-name']);

(person['first-name'] === 'Bob') ? console.log("His name is Robert Paulson") : console.log("His name was not Robert Paulson");

for (const property in person){
    console.log(`property name: ${property}, value: ${person[property]}`);
}

const overwatch = {
    name: 'Overwatch',
    developer: 'Blizzard Entertainment',
    publisher: 'Blizzard Entertainment',
    directors: ['Jeff Kaplan', 'Chris Metzen', 'Aaron Keller'],
    programmers: ['Mike Elliott', 'John LeFleur'],
    artists: ['William Petras', 'Arnold Tsang'],
    writers: ['Michale Chu', 'Alyssa Wong'],
    platforms: ['PlayStation 4', 'Windows', 'Xbox One', 'Nintendo Switch'],
    releaseYear: 2016,
    playersPerTeam: 6,
    sequel: 'Overwatch 2',
    bio: function(){
        return `${this.name} is a video game developed by ${this.developer} and published by ${this.publisher} in the year ${this.releaseYear}. It was directed by ${this.directors[0]}, ${this.directors[1]} & ${this.directors[2]}. It consists of ${this.playersPerTeam} players against ${this.playersPerTeam} players. In 2022 it was succeded by ${this.sequel}.`
    }
}

function gameOverview(game){
for (const property in game){
    console.log(`${property}: ${overwatch[property]}`)
}
}

gameOverview(overwatch);

console.log(overwatch.bio());
