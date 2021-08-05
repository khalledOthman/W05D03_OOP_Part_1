// Write a function Human that returns an object
//with the following attributes, name, and age.

const Human = function (obj) {
  // using the keyword `this` we can reference the correct instance that is invoking this function
  
  return ("name: " + obj.name + " age: " + obj.age
  )
};
const emp_0 = {
    name:"kh",
    age:32
}
const Employee=function (name,age)
{
    const emp={}
    emp.name1=name;
    emp["age1"]=age
    return emp
} 
const human1 = Employee("John", 24);



//////Q.2 Modify Human to use constructor pattern.

const huMan = function () {
    
    return "name: " + this.name;
  };
  
  const Person = function (name, age) {
    // instead of creating a new object, just add `this` instead of the object name
  
    this.name = name;
    this.age = age;
  
    this.huMaN = huMan;
  
    // no need to return anything, `this` gets returned by default when using `new`
  };
  
  // the `new` keyword will create a new instance of Person
  const human2 = new Person("John", 27);


///////Q.3 Add a method introduce to the Human object,
// that returns a string introducing the person.

const hUman =function() {
  return `Hello I am  ${this.Name}`
}
const person =function (name) {
  this.Name=name;
this.getName=hUman;
}
const human3 = new person("Mark", 30);


////Write a constructor function Safe that accepts one argument safeSize
//and returns an object with the safeSize attribute
///and a method called insert that accepts two arguments name and size
///and returns true if the item size is less than or equal the safeSize.





////Q.2




