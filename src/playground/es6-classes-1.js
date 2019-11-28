class Character {
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} level(s) old.`
    }
}

class Guildy extends Character {
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }

    hasProfession() {
        return !!this.profession;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasProfession()) {
            description += ` His profession is ${this.profession}.`;
        }
        return description;
    }
}

class Traveler extends Character {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}
const me = new Traveler('Wildur', 45, 'Darnassus');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());