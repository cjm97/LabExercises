class CoffeeMachine {
    constructor(power) {
        this._power = power;
    }
    
    get power() {
        return this._power;
    }

    #waterLimit = 200; //protected property 

    #fixWaterAmount(value){
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }
}

//create new coffee machine

let coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine.power);

console.log(`Power is: ${coffeeMachine.power}W`);