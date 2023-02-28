function makeNameDisplayerFunc(browserName) {
    const name = browserName;

    function displayName() {
        console.log(`My name is ${name}`);

    }
    return displayName;
}

const myMozillaFunc = makeNameDisplayerFunc('Mozilla');
myMozillaFunc();

const myChromeFunc = makeNameDisplayerFunc('Chrome');
myChromeFunc();

function greaterThan(n) {
    return m => m>n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function makeAdder(x) {
    return function(y) {
        return x+y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

console.log();


function sayHiBye(firstName, lastName){
    function getFullName() {
        return firstName + " " + lastName;
    }
}