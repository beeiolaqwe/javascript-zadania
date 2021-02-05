//zad1
const person = {
    name: "Michał",
    surname: "Seweryn",
    age: 1,
    country: "Poland",
    city: "Kraków",
  };
  
  const secondPerson = {
    name: "Seweyn",
    surname: "Michal",
    age: 12,
    country: "Poland",
    city: "Kraków",
  };
  
  function showInfo() {
    console.log(
      `Personal info: ${this.name} ${this.surname} ${this.age} ${this.country} ${this.city}`
    );
  }
  
  function changeAge() {
    this.age++;
  }
  
  person.showInfo = showInfo;
  secondPerson.showInfo = showInfo;
  person.changeAge = changeAge;
  secondPerson.changeAge = changeAge;
  
  person.showInfo();
  secondPerson.showInfo();
  
  person.changeAge();
  person.changeAge();
  console.log("person.age: ", person.age);
  
  secondPerson.changeAge();
  secondPerson.changeAge();
  
  console.log("person.age: ", secondPerson.age);

//zad2
 person.favouriteMeal = [];
  secondPerson.favouriteMeal = [];
  
  function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;
  secondPerson.showMeal = showMeal;
  secondPerson.addMeal = addMeal;
  
  person.addMeal("schabowy");
  person.addMeal("placek");
  person.addMeal("pierogi");
  person.showMeal();
  
  secondPerson.addMeal("schabowy 2");
  secondPerson.addMeal("placek 2");
  secondPerson.addMeal("pierogi 2");
  secondPerson.showMeal();
  
  //zad3
  function Calculator() {
  this.memory = [];
  this.sum = () => this.memory.reduce((a, b) => a + b);
  this.sub = () => this.memory.reduce((a, b) => a - b);
  this.mul = () => this.memory.reduce((a, b) => a * b);
  this.div = () => {
    if (this.memory.includes(0)) {
      console.error("You cant't divide by zero.");
      return undefined;
    }
    return this.memory.reduce((a, b) => a / b);
  };
  this.addNumbers = (a, b) => this.memory.push(a, b);
}
const calc = new Calculator();
calc.addNumbers(1, 2);
calc.addNumbers(4, 1);
console.log(calc.sum(), calc.sub(), calc.mul(), calc.div());

//zad4
function Ladder (){
    this.steps = 0;
    
    this.up = function(){
        this.steps++;
    }
    
    this.down = function(){
        if(this.steps > 0){
            this.steps--;
        }else {
            console.log('Jesteś na ziemi');
        }
        
    }
    this.showLevel = function(){
        console.log(this.steps);
    }
}

const ladder = new Ladder();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showLevel();
