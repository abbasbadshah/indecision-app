const square = function (x){
    return x * x
}

console.log(square(8))

// Method 1
// const squareArrow = (x) => {
//     return x * x;
// }

// Method 2
const squareArrow = (x) => x > 10 ? (x - 1) : (x + 1);
console.log (squareArrow(8))

// Challenge

// const getFirstName = (fullName) => {
//      return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Abbas Badshah'));
