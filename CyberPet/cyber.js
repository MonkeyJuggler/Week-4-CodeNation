

class Pets{
    constructor(title, hunger, thirst, happiness, energy){
        this._title = title;
        this._hunger = 10;
        this._thirst = 10;
        this._happiness = 10;
        this._energy = 10;
    }

    get title(){
        return this._title;
    }
    get hunger(){
        return this._hunger+=1;
    }
    get drink(){
        return this._thirst+=1;
    }
    get play(){
        return this._happiness+=1;
    }
    get sleep(){
        return this._energy+=1;
    }

    increaseFood () {
        this._hunger++;
    }

    increaseDrink() {
        this._thirst++;
    }

    increaseHappiness() {
        this._happiness++;
    }

    increaseSleep() {
        this._energy++;
    }

}

class Pets extends Animal {
    constructor(title, ) {
        super(title);
        this._holyhandgrenade = holyhandgrenade;
    }
}

let eatFood = document.getElementById("eat");

let drinkWater = document.getElementById("drink");

let playGames = document.getElementById("play");

let sleepBed = document.getElementById("sleep");

eatFood.addEventListener("click", (i) => {
    eating.increaseFood();
});

drinkWater.addEventListener("click", () => {
    drinking.increaseDrink(); 
});

playGames.addEventListener("click", () => {
    playing.increaseHappiness();
});

sleepBed.addEventListener("click", () => {
    sleeping.increaseSleep();
});

setInterval(function() {_hunger-- , _thirst-- , happiness-- , _energy--} , 30000)

const Bob = new Pets(Bob);

console.log(this.hunger);
console.log(this.thirst);
console.log(this.happiness);
console.log(this.energy);

const Cuddles = new Pet("Rabbit of Caerbannog");

