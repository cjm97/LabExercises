function subtraction(a, b){
    return a - b;
}

function addition (a, b){
    return a + b;
}

function division (a, b){
    return a / b;
}

function multiplication (a, b){
    return a * b;
}

function modulo(a, b){
    return a%b;
}
function userGreeting(a){
    console.log(`Hello ${a}`);
}

userGreeting("Chris");

// console.log(subtraction(3, 2));
// console.log(addition(3, 2));
// console.log(division(4, 2));
// console.log(multiplication(3, 2));
// console.log(modulo(10,4));


var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result); // Score: -2, Comparative: -0.666

let text2 = sentiment.analyze("It’s sad people see someone at their lowest as an opportunity to take a video to make fun of them rather than show compassion or kindness. Shame on anyone who supports this.")
console.dir(text2);