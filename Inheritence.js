class animal{
    constructor(place) {
        this.place = place;
    }
    showPlace() {
        console.log(`The place where animal is ${this.place}`)
    }

}
let animalObject1 = new animal("Zoo");
animalObject1.showPlace();


class dog extends animal{
    constructor(color, height, place) { 
        super(place);
        this.color = color;
        this.height = height;
    }
    showDogDetails(){
    console.log(`The Color is ${this.color} and Height is ${this.height}  and place is  ${this.place}`)
    }

}

let dogObject1 = new dog("brown", "2 feet","Zoo")
dogObject1.showDogDetails();
// We can use parent class method
dogObject1.showPlace();



class cat extends animal{
    constructor(color, height, place) { 
        super(place);
        this.color = color;
        this.height = height;
    }
    showCatDetails(){
    console.log(`The Color is ${this.color} and Height is ${this.height}  and place is  ${this.place}`)
    }

}
let catObj = new cat("Brown","3 feet","house");
catObj.showCatDetails();


class cow extends animal{
    constructor(color, height, place) { 
        super(place);
        this.color = color;
        this.height = height;
    }
    showCowDetails(){
    console.log(`The Color is ${this.color} and Height is ${this.height}  and place is  ${this.place}`)
    }

}
let cowObj = new cow("Black", "2 Feet", "Farm");
cowObj.showCowDetails();