let variable1 = 1;
let variable2;

if(true){
    variable2 = 2;
}

function example(){
    let exampleVar;
    const exampleConst = "example constant";
}

console.log(variable1);
console.log(variable2);


// const helloText; // 'const' declarations must be initialized in the same statement it is declared (initiliazed meaning assigned a value (e.g. const helloText = "hello!";)). This makes sense logically because const variables cannot be changed later. )
hellotext = "say Hello instead"; // error: Identifier "greeting" has already been declared.

// indexes of an array 

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

console.log(`The mountains are ${mountains[0]}, ${mountains[1]}, & ${mountains[2]}}`) //The mountains are Everesy, Fuji & Nanga Parbat

// pushing elements into an array
// push shoves an element onto the end of an array
// unshift shoves an element to the start of an array

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.push('Red Sea'); 
console.log(seas); // new array seas = ['Black sea', 'Carribean Sea', 'North Sea', 'Baltic Sea', 'Red Sea']
seas.push('K2');
console.log(seas); // new array seas = ['Black sea', 'Carribean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'K2' ]
seas.unshift('Adriatic Sea');
console.log(seas); // new array seas = ['Adriatic Sea', 'Black sea', 'Carribean Sea', 'North Sea', 'Baltic Sea', 'Red Sea'] 

// shift removes an element from the beginning of an array
// pop removes an element from the end of an array
// shift & unshift // push & pop  

let lastMountain = mountains.pop();
console.log(lastMountain);
console.log(mountains);

let firstSea = seas.shift();
console.log(firstSea);
console.log(seas);
