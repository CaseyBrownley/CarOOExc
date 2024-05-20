class vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        return "Beep";
    }
    toString(){
        return 'The vehicle is a ${this.make} ${this.model} from ${this.year}.';
    }
}

class car extends vehicle{
    constructor(make, model,year){
    super(make,model,year);
    this.numWheels = 4;
    }
}

class motorcycle extends vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM";
    }
}

class garage {
    constructor(capacity){
        this.vehicles = "";
        this.capacity = capacity;
    }
    add(newVehicle){
        if (!(newVehicle instanceof vehicle)){
            return "Only vehicles allowed in here.";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle add.";
    }
}