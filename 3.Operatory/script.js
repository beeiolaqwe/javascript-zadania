// zad 1
let x = true,
    y = false;

console.log(x === y)

//zad 2
const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;

console.log(moduloResult);

//zad3
let stringsResult = "",
    a = "test",
    b = "foo";

stringsResult = a + b;

console.log(stringsResult);

//zad4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someString === someNumber); // false
/* Róznica
 * operator '==' porównuje czy zmienne są równe, nie zwracając uwagi na typ
 * operator '===' porównuje tez typ zmiennych 
 */
 
 //zad5
 let counter = 30;

console.log(counter);

counter++;
console.log(counter);

counter--;

console.log(counter);

//zad6
let n1 = 15,
    n2 = 6,
    result = null;
    
result = n1 > n2;

console.log(result);
