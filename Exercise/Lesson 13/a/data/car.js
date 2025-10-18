class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails){
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    go() {
        this.speed += 5;

        if(this.isTrunkOpen === true) {
            this.speed = 0;
        }
        
        if (this.speed > 200) {
            this.speed = 200
        } 
    }  

    break() {
        this.speed -= 5;

        if(this.speed < 0) {
            this.speed = 0
        }
    }

    openTrunk() {
        this.isTrunkOpen = true;

        if(this.speed > 0) {
            this.isTrunkOpen = false;
        } 
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }

    displayInfo() {
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, isTrunkOpen: ${this.isTrunkOpen}`);
    }
}

const swift = new Car({
    brand: 'marutiSuzuki',
    model: 'dzire'
});

const nano = new Car({
    brand: 'tata',
    model: 'XM'
});


class RaceCar extends Car {
    acceleration = 0;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300
        }
    }  

    displayInfo() {
        console.log(`${this.brand} ${this.model}, acceleration: ${this.acceleration}`);
    }
}

const galardo = new RaceCar({
    brand: 'lamborghini',
    model: 'galardo',
    acceleration: 20
})

galardo.go();
galardo.displayInfo();









