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

class FullCar extends Vehicle{
    constructor(brand,year,color,doors,fuel,speed){
        super(brand,year,color,doors,fuel);
        this.speed = speed;
    }
    getSpeed(){
        return `${this.speed}`;
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

brand2 = "byd";
year2 = 2022;
color2 = "green";
doors2 = 5;
fuel2 = "electric";

const fullcar1 = new FullCar(brand2,year2,color2,doors2,fuel2,190);
console.log(`${fullcar1.getInfo()} and ${fullcar1.getSpeed()} speed`);