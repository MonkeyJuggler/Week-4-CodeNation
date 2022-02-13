


class car {
    constructor(reg, hours, charge, paid){
        this._reg = reg;
        this._hours = 0;
        this._charge = 1.5;
        this._paid = false;
    }

getDeparture(departure) {
    this._departureTime = departure;
}

calculateCost() {
    return (this.departureTime - this._arrival)
}

makePayment(amountPaid) {
    if (amountPaid >= this.calculateCost(){
        this._hasPaid = true;
        return 'Parking has been paid';

    }
}

    get registration(){
        return this._registration;
    }
    get hoursparked(){
        return this._hoursparked;
    }
    get amountcharged(){
        return this._amountcharged;
    }
    increaseHours(){
        this._hours++;
        this._amountcharge += 1.50
    }
}

const pay = (registration, 5) => {
    const car = new Car(registration);
    for (i = 0; i < hr; i++){
        car.increaseHours();
    }
}
return 'You need to pay £${car.amountcharged} for ${car.hoursparked} hours.';

console.log(volvo._registration);

