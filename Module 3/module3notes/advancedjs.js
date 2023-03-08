function makeNameDisplayerFunc(browserName) {
  const name = browserName;

  function displayName() {
    console.log(`My name is ${name}`);
  }
  return displayName;
}

const myMozillaFunc = makeNameDisplayerFunc("Mozilla");
myMozillaFunc();

const myChromeFunc = makeNameDisplayerFunc("Chrome");
myChromeFunc();

function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

console.log();

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + " " + lastName;
  }
}

//set timeout
function printMessage(msg) {
  console.log(
    `The following message will be quite delayed by varied amounts '${msg}'`
  );
}

function printMessages(...msgs) {
  console.log(
    `Several messages were supplied to this function: ${msgs.join(", ")}`
  );
}

// const delayedTimer = setTimeout(printMessages, 5000, 'i am delayed',  'by 5000ms', 'which is 5s');

// const delayedTimer2 = setTimeout(printMessages, 1000, 'i am also delayed but only by 1000ms which is 1s');

//set interval

// let intervalTimer = setInterval(printMessages, 5000, "messages will come every 5000ms", "second message", "third message");
// setTimeout(() => clearInterval(intervalTimer), 20100); // only prints 3 messages with timeout of 20100ms, 100 extra ms gives it leeway to print message that 4th and final time

//nested set timeout

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 2000);

function repeatTimeout(delay, limit) {
  let counter = 1;
  setTimeout(
    function repeatThis(current) {
      console.log(
        "The function 'repeatTimeout' has been repeated " +
          current +
          " of " +
          limit +
          " times"
      );
      if (current < limit) setTimeout(repeatThis, delay, current + 1);
    },
    delay,
    counter
  );
  counter++;
}

// repeatTimeout(1000, 10);

const tempUser = {
  firstName: "chris",
  lastName: "marsh",
  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// tempUser.printName();
// setTimeout(() => tempUser.printName(), 500);

// function slow(x, y, z) {
//   // there can be a heavy CPU-intensive job here like adding up to a large number
//   let goal = Math.floor(Math.random() * x * 1_000_000);
//   console.log(
//     `slow(${x}, ${y}): randomly generated goal for ${x * 1_000_000} is ${goal}`
//   );
//   let random = 0;
//   for (let i = 0; i < goal; i++) {
//     random++;
//   }
//   return random;
// }

// function cachingDecorator(func) {
//   const cache = new Map();
//   const outerContext = this;
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x);
//     cache.set(x, result);
//     return result;
//   };
// }

function cachingDecorator2(pureFunction) {
  let funcParams = Array.from(arguments).join("");
  if (cache.has(funcParams)) {
    console.log("returned cached value for " + funcParams);
    return cache.get(funcParams);
  }
  let result = pureFunction.apply(outerContext, arguments);
}

// slow = cachingDecorator(slow);
// console.log(slow(1));
// console.log("Again: " + slow(1));
// console.log(slow(2));
// console.log("again:" + slow(2));

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.name);
console.log(user.surname);
console.log(user.fullName);

user.fullName = "James Smith";

console.log(user.fullName);

console.log(user.name);

for (let key in user) console.log(key);

let newUser = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log(
        `The name ${value} is too short, needs to be at least 4 characters`
      );
      return;
    }
    this._name = value;
  },

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0) {
      console.log(`value is too low, you set it to ${value} which is <0.`);
      return;
    } else if (value > 120) {
      console.log(`Age is too high, you set it to ${value} which is >120`);
      return;
    } else {
      this._age = value;
    }
  },
};

newUser.name = "Pete";
console.log(newUser.name);
newUser.name = "Tim";
console.log(newUser.name);
newUser.age = 27;
console.log(newUser.age);
newUser.age = 123;
console.log(newUser.age);
newUser.age = -13;
console.log(newUser.age);

// add an age property via getters and setters that can't be less than 0 or more than 120

function UserThree(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  //age is calculated from the current date and birthday.

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      let todayMonth = new Date().getMonth();
      if (this.birthday.getMonth() < todayMonth) {
        return todayYear - this.birthday.getFullYear();
      } else {
        return todayYear - this.birthday.getFullYear() - 1;
      }
    },
  });
}

let john = new UserThree("John", new Date(1992, 6, 1));

console.log(john.birthday);
console.log(john.age);

// caching decorator
// function cachingDecorator(pureFunction) {
//   const cache = new Map();

//   const outerContext = this;

//   return function () {
//     //let x = arguments[0];

//     let funcParams = Array.from(arguments).join("");

//     if (cache.has(funcParams)) {
//       // if there's such key in cache

//       console.log("returned cached value for " + funcParams);

//       return cache.get(funcParams); // read the result from it
//     }

//     //let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context

//     let result = pureFunction.apply(outerContext, arguments); //can also use apply - very similar, only difference is in handling arguments

//     //let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context

//     cache.set(funcParams, result); // and cache (remember) the result

//     console.log("generated new value " + result + " for " + funcParams);

//     return result;
//   };
// }

function slow(x, y, z ) {
  // there can be a heavy CPU-intensive job here like adding up to a large number

  let goal = Math.floor(Math.random() * x * 1_000_000); //random number between 0 and a million times x

  console.log(
    `slow(${x}, ${y}, ${z}): randomly generated goal for ${x * 1_000_000} is ${goal}`
  );

  let random = 0;

  for (let i = 0; i < goal; i++) {
    random++;
  }

  return random;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      console.log(x + ' was cached' ) ;
      return cache.get(x);

    }

    let result = func.call(this, x); // "this" is passed correctly now
    // let result = func(x) fails because context is lost

    cache.set(x, result);
    return result;
  };
}

let worker = {
  someMethod() {
    return 10;
  },

  slow(x) {
    console.log(arguments);
    return x * this.someMethod();
  }
}

slow = cachingDecorator(worker.slow);

console.time('slow no caching');
console.log(slow(1, 2, 3));
console.timeEnd('slow no caching');

console.time('slow with caching');
console.log("Again: " + slow(1, 2, 3));
console.timeEnd('slow with caching');