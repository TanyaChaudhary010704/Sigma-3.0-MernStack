//-----------------------------
//OBJECT PROTOTYPE
// let arr = [1, 2, 3];
// arr.sayHello = () => {
//   console.log("hello!");
// }
// console.log(arr);
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(String.prototype);

//-----------------------------
//FACTORY FUNCTIONS
// function PersonMaker(name,age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log("my name is " + this.name);
//     },
//   };
//   return person;
// }
// const p1 = PersonMaker("Tanu", 25);

//-----------------------------
//CONSTRUCTOR and NEW
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.talk = () => {
//   console.log(`hi ${this.name}`);
// }
// let p1 = new Person("Xyz", 45);
// let p2 = new PersonMaker("abc", 23);

//---------------------------------
//CLASSES
// class Person{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log("Hi !");
//   }
// }
// let p1 = new Person("Xyz", 45);

//--------------------------------
//INHERITANCE
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi ${this.name}`);
  }
}
class Student extends Person{
  constructor(name, age, marks) {
    super(name,age);//calls parent constructor
    this.marks = marks;
  }
}
class Teacher extends Person{
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}