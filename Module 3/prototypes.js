let animal = {
    eats: true,
    sleeps: true,
    legs: 4,
    mammal: true
};




let rabbit = Object.create(animal, {
    jumps: {
        value: true,
        enumerable: true
    }
});


console.log(rabbit);

rabbit.jumps = true;


console.log('\nRABBIT');

console.log(rabbit.eats);
console.log(rabbit.legs);
console.log(rabbit.jumps);
console.log(Object.keys(rabbit));

for (let prop in rabbit) console.log(`${prop} is ${rabbit[prop]}`);


console.log('\nCAT');


function Cat(name) { //constructor function
    this.name = name;
}

Cat.prototype = animal;

const cat = new Cat("Tortoiseshell");

console.log(`Cat eats? ${cat.eats}`);

for (let prop in cat) console.log(`${prop} is ${cat[prop]}`);

console.log('\nPotato');

let potato = Object.create(animal, {
    jumps: {
        value: false,
        enumerable: true
    }
});

potato.eats = "gets eaten";
potato.legs = 0;
potato.mammal = false;

console.log(potato.eats);
console.log(potato.legs);
console.log(Object.keys(potato));

for (prop in potato) console.log(`${prop} is ${potato[prop]}`);


console.log('\nSweet Potato');

function SweetPotato(name) { //constructor function
    this.name = name;
}

SweetPotato.prototype = animal; //sets prototype to established "animal"

const sweetpotato = new SweetPotato("Orange Sweet Potato");

sweetpotato.eats = "gets eaten";
sweetpotato.legs = 0;
sweetpotato.mammal = false;
sweetpotato.tasty = true;


console.log(Object.keys(sweetpotato));

for (let prop in sweetpotato) console.log(`${prop} is ${sweetpotato[prop]}`)


// classes in js 
class Animal {

    constructor(name) {
        this.speed = `${0}km/h`;
        this.name = name;
        this.type = 'animal'
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    glare() {
        this.speed = 0;
        console.log(`${this.name} stands still. He's glaring at you... a hungry look crosses his face.`);
    }
}

class Hippo extends Animal {
    static type = "hippo";

    constructor (name, weight)
    {
        super(name),
        this.weight = `${weight} kg`,
        this.type = 'hippo'
    }

    eats() {
        console.log(`${this.name} is coming to eat you. Luckily he travels quite slowly.`);
    }

    defecates() {
        console.log(`${this.name} is having a bowel motion... run`);
    }

    action() {
        super.glare(); // call parent glare
        this.eats(); //and then hide

    }
    run (){
        this.speed = `${5}km/hr`;
        console.log(`${this.name} has started running towards you at ${this.speed}`);
    }
    dawdle(){
        this.speed=`${0.2}km/hr`;
        console.log(`${this.name} gets tired quite quickly... speed has dropped to ${this.speed}`);
        this.speed=`${0}km/hr`
        console.log(`I guess ${this.name} is REALLY tired now... speed is ${this.speed}`);
    }
}

const pig = new Animal('Porky Pig');
pig.speed = "7km/h";
console.log(pig);

const hippo = new Hippo("Hungry Hippo", 1500); 

console.log(hippo);

hippo.action();
hippo.defecates();
hippo.run();
hippo.dawdle();

console.log(hippo.type);