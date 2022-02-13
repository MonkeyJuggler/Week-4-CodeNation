class Person {
    constructor(nom, d, m, y){
    this._nom = nom;
    this._d = d;
    this._m = m;
    this._y = y;
    }
    underThree(){
        if (m < 3) {
        m = m + 12,
        y = y - 1,
        
        let f = Math.floor(y/100);

        let l = y - (100 * f);

        let s = Math.floor((2.6 * m) - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + d + l - (2 * f);

        let x = s - (7 * Math.floor(s / 7));
    
    }
    
    }
    
}

const Peter = new Person("peter", 27, 3, 1985);

console.log(Peter)

console.log(Peter.underThree());

let DayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    console.log(DayOfWeek[x]);