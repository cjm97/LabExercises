// 1. Are counters independent?
// Here we make two counters: counter and counter2 using the same makeCounter
// function.
// Are they independent? What is the second counter going to show? 0,1 or 2,3 or
// something else? 0,1 - independent
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); // ? 0
// console.log(counter2()); // ? 1

// Set and decrease counter?
// Modify the code of makeCounter() so that the counter can also decrease and set the
// number:
// ● counter() should return the next number (as before).
// ● counter.set(value) should set the counter to value.
// ● counter.decrease() should decrease the counter by 1.
// See the sandbox code for the complete usage example.
// P.S. You can use either a closure or the function property to keep the current count. Or write
// both variants
function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => {
    return (count = value);
  };
  counter.decrease = () => {
    return count--;
  };
  return counter;
}

let counter = makeCounter();

console.log(counter()); // console logs counter as 0 because ++ is postfixed - the count is now 1 after this.
console.log(counter.decrease()); // console logs counter as 1 because -- is postfixed - the count is now 0 after this.
console.log(counter()); //console logs counter as 0 because of the above two lines, after this the count is now 1.
console.log(counter.set(8)); // count changed to 8.
console.log(counter.decrease()); // count is now 7 however as mentioned on line 45 it will display as 8 because of the postfix form. the count is formally 7.
console.log(counter()); // count is now 8 however 7 will be logged.

// 3. Output every second
// Write a function printNumbers(from, to) that outputs a number every second, starting
// from from and ending with to.
// Make two variants of the solution.
// 1. Using setInterval.
// 2. Using nested setTimeout.

function printNumbers(from, to) {
  let counter = from;
  const intervalId = setInterval(() => {
    console.log(counter);
    counter === to ? clearInterval(intervalId) : counter++;
  }, 1000);
}




const printNumbers2 = (from, to) => 
{
    let counter = from;
    setTimeout(repeatThis = () => {
      console.log(`${counter} of ${to}`);
      if (counter < to) {
        counter ++;
        setTimeout(repeatThis, 1000);
      }
    },
    1000);
}


// setTimeout(clearTimeout(timer), 10000) - // clears time-out after 10s

printNumbers2(12, 23);

// 4. Debounce decorator
// The result of debounce(f, ms) decorator is a wrapper that suspends calls to f until
// there’s ms milliseconds of inactivity (no calls, “cooldown period”), then invokes f once with
// the latest arguments.
// In other words, debounce is like a secretary that accepts “phone calls”, and waits until
// there’s ms milliseconds of being quiet. And only then it transfers the latest call information
// to “the boss” (calls the actual f).
// For instance, we had a function f and replaced it with f = debounce(f, 1000).
// Then if the wrapped function is called at 0ms, 200ms and 500ms, and then there are no
// calls, then the actual f will be only called once, at 1500ms. That is: after the cooldown
// period of 1000ms from the last call.
// …And it will get the arguments of the very last call, other calls are ignored.
// Here’s the code for it (uses the debounce decorator from the Lodash library):
let f = _.debounce(alert, 1000);
f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);
// debounced function waits 1000ms after the last call and then
runs: alert("c")