// const arr = ["John", "Smith"];
// const [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

const [firstName, , title] = ["Julius", "Caesar", "Consul"];
console.log(firstName);
console.log(title);

const printWeather = () => {
  let [currentTemp, maxTemp, windSpeed, forecast] = [
    10,
    11,
    20,
    "Cold and windy as heck",
  ];
  console.log(
    `Today's weather forecast: ${forecast}, with a wind speed of ${windSpeed}km/h. The current temperature is ${currentTemp} deg C and the max temperature is ${maxTemp} deg C`
  );
};

printWeather();

const foods = new Set([
  "pizza",
  "chips",
  "pasta",
  "salad",
  "noodles",
  "vegetables",
]);
const [firstFood, , thirdFood, , fifthFood, ...moreFoods] = foods; //destructuring ignores elements with commas
console.log(firstFood, thirdFood, fifthFood);
console.log(`First food is: ${firstFood}`);
console.log(`Second food is: ${thirdFood}`);
console.log(`Third food is: ${fifthFood}`);
console.log(moreFoods);

const plantNames = new Map([
  ["Blueberry", "Vaccinium"],
  ["Daylily", "Hemerocallis"],
  ["Foxglove", "Digitalis"],
  ["Lavender", "Lavandula"],
]);

//  const [ [plant1common, plant1latin], ...otherPlants ] = plantNames;
//  console.log(plant1common, plant1latin);
//  console.log(otherPlants);

console.log("For ... of destructuring loop:");
for (let [plantName, fancyName] of plantNames.entries()) {
  console.log(`Generic name: ${plantName} \nFancy pants name: ${fancyName}\n`);
}

console.log("For each example:");
plantNames.forEach((plantName, fancyName) => {
  console.log(`Generic name: ${plantName} \nFancy pants name: ${fancyName}\n`);
});

console.log(`\nObject Desctructuring`);

function displayComponent({ height = 200, width = 100, title }) {
    console.log(height);
    console.log(width);
    console.log(title);

  console.log(
    `<div style="width:${width}px; height: ${height}px"><h2>${title}</h2></div>`
  );
}

displayComponent({ title: "My Awesome Component" });
displayComponent({width: 200, title: "My Awesome Component with w = 200" });
displayComponent({ width: 300, height:300, title: "My 300x300 Component" });


console.log(`\n Date and Time`);

// const now = new Date("2017-01-26"); // new Date(year, month, day, hours, minutes, seconds) 
// console.log(now);


const today = new Date()
console.log(today);
const christmas = new Date ('2023-12-25');
console.log(christmas);
const tomorrow = new Date(today.getFullYear(), today.getMonth()+1, 1);
console.log(tomorrow);

console.log(today.toLocaleTimeString());
console.log(christmas.toLocaleString());