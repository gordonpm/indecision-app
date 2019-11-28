// const square = function(x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// }

// console.log(squareArrow(10));

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// }

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Ajax Maximus'));

const user = {
    name: 'Wildur',
    cities: ['Darnassus', 'Ironforge', 'Stormwind'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
