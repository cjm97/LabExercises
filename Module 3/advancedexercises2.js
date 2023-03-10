// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }

// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

// a)
// let counter2 = makeCounter();
// counter2(); // 1
// counter2(); // 2

// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)

// function makeCounter(startFrom) {
//     let start = Number(startFrom);
//     return function() {
//     start++;
//     console.log(start)
//     return start;
//     };
//     }

// let counter3 = makeCounter(3);
// counter3();

// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by
function makeCounter(startFrom, incrementBy) {
  let start = Number(startFrom);
  return function () {
    start += incrementBy;
    console.log(start);
    return start;
  };
}
let counter4 = makeCounter(4, 3);
counter4(); // starts at 4, increments by 3.
counter4(); // count is now at 7, increase by 3 = 10
counter4(); // count is now 10, increase by 3 = 13.

// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// a) What order will the four tests below print in? Why?

// #4 -> --> 3 --> 2 --> 1
//4 has no timeout. 3 has a timeout of 0ms, 2 has a timeout of 20ms, and 1 has a timeout of 100ms.

// b) Rewrite delayMsg as an arrow function

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay of ${msg}`);
};

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");
let message5 = setTimeout(
  delayMsg,
  11000,
  "#5 - super large delay, greater than 10s"
);

// d) Use clearTimeout to prevent the fifth test from printing at all.

clearTimeout(message5);

// 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:

// function printMe() {
// console.log('printing debounced message')
// }
// printMe = debounce(printMe); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout( printMe, 100);
// setTimeout( printMe, 200);
// setTimeout( printMe, 300)

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.

const debounce = (func) => {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, 1000); //worry about call and apply when worrying about arguments/context - this function has no arguments so it is nice and simple
  };
};

function printMe() {
  console.log("printing debounced message");
}
// printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// const debounce = (func, ms) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(func, ms);
//   };
// };

// printMe = debounce(printMe, 1000);
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
const debounce = (func, ms) => {
  let timer;
  return function (msg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(msg);
    }, ms);
  };
};
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}
printMe = debounce(printMe, 1000);
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// printMe("Hello, world!");

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

const printFibonacci = () => {
  let n1 = 0;
  let n2 = 1;

  setInterval(() => {
    console.log(n2);
    const nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }, 1000);
};

// printFibonacci(0, 1, 1000);
//
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing

const printFibonacciTimeouts = () => {
  let n1 = 0;
  let n2 = 1;

  const nextNumberFunc = () => {
    console.log(n2);
    const nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    setTimeout(nextNumberFunc, 1000);
  };

  setTimeout(nextNumberFunc, 1000);
};

//   printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping

const printFibonacciLimit = (limit) => {
  let n1 = 0;
  let n2 = 1;
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log(n2);
    const nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    counter++;
    if (counter === limit) {
      clearInterval(intervalId);
    }
  }, 1000);
};

// printFibonacciLimit(10);

// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };

// car.description(); //works
// setTimeout(car.description, 200); //fails
// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

// setTimeout(() => {
//   car.description();
// }, 200);

// b) Change the year for the car by creating a clone of the original and overriding it

// const carClone = Object.assign({}, car);
// carClone.year = 1965;

// console.log(carClone);
// console.log(`line 250 ${car.year}`);
// car.description(); // date is 1964
// carClone.description(); // date is 1965

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?

// uses the original values, the clone is a different object;

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

let bike = {
  make: "giant",
  model: "big",
  year: 1999,
  description() {
    console.log(`This is a ${this.make} ${this.model} from ${this.year}`);
  },
};

const boundDescription = car.description.bind(car);
const boundDescriptionTwo = car.description.bind(bike);
// setTimeout(boundDescription, 200); //works because using bind sets its "this" keyword to the value of car (the passed argument);.
// setTimeout(car.description, 200); // does not work
// setTimeout(boundDescriptionTwo, 200); // in this example it is using the car object's description function, but the "this" keyword is set to the bike object's properties.

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d),

// carCloneTwo = Object.assign({}, car);
// console.log('\nCar Clone Two');
// carCloneTwo.year = 1374;
// setTimeout(boundDescription, 1000);

// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

Function.prototype.delay = function (ms) {
  const func = this; // "this refers to the function being called"
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

// multiply.delay(1000)(3, 10);
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters

//done

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works
// multiply.delay(1000)(3, 10, 6, 3);

// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details

function Person(name, age, gender) {
  this.name = name;
  this.age = age; 
  this.gender = gender;
}
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

Person.prototype.toString = function () {
  return `${this.name} is a ${this.age} year old ${this.gender}`;
};

console.log(person1.toString());

// b) Test your method by creating 2 different people using the below constructor function
// and printing them
const person2 = new Person("Brandon Sanderson", 55, "male");
console.log(person2.toString());

const person3 = new Person("Rose Xu", 26, "female");
console.log(person3.toString());
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.
Student.prototype.toString = function () {
  return `${this.name} is a ${this.age} year old ${this.gender}. They are of the ${this.cohort} cohort.`;
};

const person4 = new Student("Chris Marsh", 25, "male");
person4.cohort = "IOD";
console.log(person4.toString());

// 8. The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();
myClock.stop();
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision ??? the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const myPreciseClock = new PrecisionClock("My precise clock:", 10000);
myPreciseClock.start();
myPreciseClock.stop();

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
  checkDisplay() {
    let date = new Date();
    if (
      date.getHours() == this.wakeupTime.slice(0, 2) &&
      date.getMinutes() == this.wakeupTime.slice(-2)
    ) {
      super.stop();
      console.log("Wake up!");
    } else {
      this.display();
    }
  }
  start() {
    this.checkDisplay();
    this.timer = setInterval(() => this.checkDisplay(), 1000);
  }
}

const alarmClock = new AlarmClock("My alarm clock", "10:41");

alarmClock.start();
alarmClock.stop();

// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.

// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

// c) Update the testing code to catch rejected promises and print a different message

// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
  let randInt = Math.floor(Math.random() * 19) * 1000 + 1000;
  console.log(randInt);
  let even = (randInt / 1000) % 2 === 0;
  console.log(even);
  let delay = new Promise((resolve, reject) => {
    if (even) {
      setTimeout(() => {
        console.log(`Delay of ${randInt} is completed`);
        resolve();
      }, randInt);
    } else {
      reject(
        `Delay of ${randInt} is rejected because time is odd (${randInt} ms in seconds is ${
          randInt / 1000
        } seconds)`
      );
    }
  });
  return delay;
}

// randomDelay()
//   .then(() => console.log(`Delayed successfully completed`))
//   .catch((error) => {
//     console.log(error);
//   });

//   10. Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)
// a) Write a new version of this function using async/await
async function fetchURLData2(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

// fetchURLData2("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.
async function fetchURLData3(urls) {
  const fetchPromises = urls.map((url) =>
    fetch(url).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    })
  );

  return Promise.all(fetchPromises);
}

fetchURLData3([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
])
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));
