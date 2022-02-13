

class Cars {
    constructor(reg, arrival, hourlyCost) {
        this._reg = reg;
        this._arrival = arrival;
        this._hourlyCost = hourlyCost;
        this._hasPaid = false;
    }
    get hasPaid() {
        return this._hasPaid;
    }
    getDeparture(departure){
        this._departureTime = departure;
    }

    calculateCost(){
        return (this._departureTime - this._arrival) * this._hourlyCost;
    }
    makePayment(amountPaid){
        if (amountPaid >= this.calculateCost()){
            this._hasPaid = true;
            return 'Parking has been paid';
        }   
            else {
                return 'Parking has not been paid'
            }
    }
}

const AA11A1 = new Cars("AA11A1", 2, 1.50);

AA11A1.getDeparture(10);



console.log(AA11A1.calculateCost());

console.log(AA11A1);

AA11A1.makePayment(12);
console.log(AA11A1.makePayment(12)); 