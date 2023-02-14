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

function userGreeting(a){
    console.log(`Hello ${a}`);
}

userGreeting("Chris");

console.log(subtraction(3, 2));
console.log(addition(3, 2));
console.log(division(4, 2));
console.log(multiplication(3, 2));

var Sentiment = require('sentiment');


function analyseSentence(sentence){
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);
    return result.score;
}

analyseSentence("i love chocolate but i hate that it makes me fat")

console.log(`Your score is ${result.score}`);

