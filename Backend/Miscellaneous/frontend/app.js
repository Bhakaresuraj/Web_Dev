
/*
 // --------OBJECT PROTOTYPE--------------------------------------
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

arr1.sayhello = () => {
    console.log("Hello i am arr.....");
}
arr1.__proto__.push = (n) => { console.log(`Adding element ${n}`) }
arr2.sayhello = () => {

    console.log("Hello i am arr.....");

}

console.log(Array.prototype);
console.log(String.prototype);

*/
/*
function personMaker(name,age){
    const obj={
        name:name,
        age:age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        }
    }
    return obj;
}



let p1=personMaker("suraj",20);
let p2=personMaker("Sudarshan",22 );
let p3=personMaker("Yash",21);
*/
/*

// constructor- doesen't return anything & starts with capital letter...
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// for defining new property for each object..
Person.prototype.talk=()=>{
    console.log(`Hi my name is ${this.name}`);
}
let p1 = new Person("suraj", 20);
let p2 = new Person("lande", 20);
*/

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`My name is ${this.name}`);
    }
}
 
let p1=new Person("suraj",30);
let p2=new Person("sudru",30);



class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    greet(){
        return "Hello";
    }
}

let s1=new Student("Suraj",21,100);
