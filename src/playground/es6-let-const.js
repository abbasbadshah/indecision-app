var nameVar = 'Abbas Badshah';
var nameVar = "Mohammed Bhai";
console.log('nameVar', nameVar);

let nameLet = 'Mustansir Badshah';
nameLet = 'Rukaiyya Badshah';
console.log('nameLet', nameLet);

const nameConst = 'Aziz Badshah';
console.log('nameConst', nameConst);

// function getPetName (){
//     const petName = 'joe';
//     return petName;
// }

// const petName = getPetName()
// console.log(petName);

// Block Scoping 

var fullName = 'Abbas Badshah';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName)
}
