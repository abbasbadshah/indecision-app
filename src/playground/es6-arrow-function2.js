// arguments object - no longer bound with the arrow functions

// const substract = function (a, b) {
//     consolele.log(arguments);
//     return a - b;
// }
//  console.log(substract(55, 1))
// Arrow functions
const add = (a, b) => {
    // console.log(arguments)
    return a + b;
 };
console.log(add(55, 1));

// this keyword - no longer bound with the arrow functions

// const user  = {
//     name: 'Abbas Badshah',
//     cities: ['Indore', 'Bhopal', 'Mumbai'],
//     printPlasesLived : function() {
//         const that = this;
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in ' + city);
//         })
//     }
// };
// user.printPlasesLived(); // ES 5 Function

const user  = {
    name: 'Abbas Badshah',
    cities: ['Indore', 'Bhopal', 'Mumbai'],
    printPlasesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlasesLived()); // ES6 Function

// Challenge area

const multiplier = {
    numbers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 6,
    multiply: function(){return this.numbers.map((number) => number * this.multiplyBy)} 
};
console.log(multiplier.multiply(6));