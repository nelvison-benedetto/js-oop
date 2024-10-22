class Vehicle{
    constructor(brand,year,color,doors,fuel){
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.fuel = fuel;
    }
    getInfo(){
        return `${this.brand} ${this.year} ${this.color} ${this.doors} ${this.fuel}`;
    }
    getCarTime(){
        let timenow = new Date();
        let age = timenow.getFullYear()-this.year;
        return age;
    }
}

brand1 = "Fiat";
year1 = 2019;
color1 = "blu";
doors1 = 4;
fuel1 = "gas"
const vehicle1 = new Vehicle(brand1,year1,color1,doors1,fuel1);
console.log(vehicle1.getInfo());
console.log(vehicle1.getCarTime());
