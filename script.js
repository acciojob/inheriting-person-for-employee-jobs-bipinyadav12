class Person{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}
class Employee extends Person{
  constructor(name,age,jobTittle){
 super(name,age)
 this.jobTittle=jobTittle
  }
  jobGreet(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTittle}.`)
  }
} 
const an= new Person("bob",34,"maneger")
an.greet()

window.Person = Person;
window.Employee = Employee;