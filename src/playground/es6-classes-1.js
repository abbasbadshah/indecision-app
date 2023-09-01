class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting() { return `Hii i am ${this.name}!`; }
    getDiscription() {
        return `${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    hasSubject() {
        return !!this.subject
    }
    getDiscription() {
        let discription = super.getDiscription();

        if (this.hasSubject()){
            discription += `their subject is ${this.subject}`;
        }
        return discription;
    }
}

class Traveler extends Person {
    constructor(name, age , homeAddress) {
        super(name, age);
        this.homeAddress = homeAddress;
    }getGretting(){
        let gretting = super.getGretting();
        if(this.homeAddress){
            gretting += ` I am  visiting from ${this.homeAddress}`
        }

        return gretting
    }
};

// const me = new Student('Mohammed', 21, 'Computer Science');
// const other = new Student();
// console.log(`${me.getGretting()} & i am ${me.age} and i am studing ${me.subject}`);
// console.log(`${other.getGretting()} & i am ${other.getDiscription()} and i am studing ${other.subject}`);


const meTrav = new Traveler('Abbas', 23, 'Indore');
console.log(meTrav.getGretting());