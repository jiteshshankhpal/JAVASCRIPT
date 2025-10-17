class Car {
    brand;
    model;
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
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, isTrunkOpen: ${this.isTrunkOpen}`);
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


swift.displayInfo();
swift.openTrunk();
swift.displayInfo();
swift.go();
swift.displayInfo();
swift.closeTrunk();
swift.go();
swift.displayInfo();
swift.closeTrunk();
swift.displayInfo();








