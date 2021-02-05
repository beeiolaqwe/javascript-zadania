    //zad1
    const tab = ["Bartek", "ma", "długopis"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );     
    
//zad2
var arr2 = [1, 2, 3, "4", "5", null, 44.1];
console.log(arr2[0] + ' ' + arr[1]);
console.log(arr2[arr2.length-1]);
console.log(arr2);
console.log(arr2.reduce(function(prev, cur, index){
    if (index % 2 === 0) {
        prev.push(cur);
    }
    return prev;
}, []));
arr2.forEach(element => {
    if (typeof element === 'string') {
        console.log(element);
    }
});
arr2.forEach(element => {
    if (typeof element === 'number') {
        console.log(element);
    }
});

//zad3
console.log(arr.reduce((val, el) => val + el, 0));

console.log(arr.reduce((val, el) => val - el, 0));

console.log(arr.reduce((val, el) => val+el, 0) / arr.length);

console.log(arr.filter(val => val%2===0));

console.log(arr.filter(val => val%2===1));

console.log(arr.reduce((max, el) => max > el ? max : el));

console.log(arr.reduce((min, el) => min < el ? min : el));

console.log(arr.reverse());

//zad4
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

//zad5
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

//zad6
const averageArrFunc1 = (arr = []) => {
    let counter = 0,
        value = 0;

    arr.forEach(el => {
        if (el % 2 === 0) {
            value += el;
            counter++;
        }
    });

    return Math.round(value / counter);
};

console.log(averageArrFunc1([9, 1, 7, 2, 1, 1, 6, 3, 2]));

//zad7
const toSortArray = [9, 2, 22, 5, 7, 4];

const sortTab = toSortArray.sort((a, b) => a - b);
console.log(sortTab);

//zad8
const toSumArrayA = [2, 3, 2]
const toSumArrayB = [1, 4, 3]

function sumArraysValue(arrayA, arrayB) {
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);
    });

    return newArray;
}

console.log(sumArraysValue(toSumArrayA, toSumArrayB));

//zad9
const numbers2 = [-2, 5, -1, -23, 64];

function changeElement(arr) {
    return arr.map(n => n *= -1); 
}

console.log(changeElement(numbers2));
