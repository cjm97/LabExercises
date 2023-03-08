const start = () => {
  console.log("Pizza preparation time");
  setTimeout(makeBase, 100, addSauceAndCheese, addToppings, intoOven, finish);
};
const makeBase = (...actions) => {
  console.log("The base has now been made");
  setTimeout(actions.shift(), 500, ...actions);
};
const addSauceAndCheese = (...actions) => {
  console.log(
    "Sauce has been added to the base and cheese has been layered on top"
  );
  setTimeout(actions.shift(), 200, ...actions);

};
const addToppings = (...actions) => {
  console.log("Toppings added to the pizza");
  setTimeout(actions.shift(), 300, ...actions);

};
const intoOven = (...actions) => {
  console.log("Pizza is cooking in the oven");
  setTimeout(actions.shift(), 800, ...actions);

};
const finish = (...actions) => {
  console.log("Pizza is ready mama mia");
};

start();