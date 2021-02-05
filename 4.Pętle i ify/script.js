//zad 1
let n1 = 15,
    n2 = 6;

if(n1 > n2){
  console.log(n1);
} else {
    console.log(n2);
}

//zad2
var c = 444, d = 122, e = 111;
if (c > d && c > e) {
    console.log("c jest najwieksze");
} else if (d > c && d > e) {
    console.log("d jest najwieksze");
} else {
    console.log("e jest najwieksze");
}

//zad3
for (let i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

//zad4
let result = 0;
for(i=0; i<=10; i++){
    result += i;
}
console.log(result);

//zad5
var n = 5;
for(i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

//zad6
	console.log("i= " + i + ", j= " + j);

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

//zad7
for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    } else{
        console.log(`${i}`);
    }
}

//zad8
// a)
for (let i=0; i<5; i++) {
    console.log('*'.repeat(i+1));
}
// b)
for (let i=0; i<5; i++) {
    console.log(' '.repeat(5-i) + '* '.repeat(i+1));
}
// c)
for (let i=0; i<5; i++) {
    console.log(' '.repeat(5-i) + '*'.repeat((i+1)*2-1));
}
// d)
for (let i=0; i<5; i++) {
    let str = '*'.repeat(i+1);
    for (let j=i+1; j<5; j++) {
        str += j;
    }
    console.log(str);
}
console.log('-----');
for (let i=4; i>=0; i--) {
    let str = '*'.repeat(i+1);
    for (let j=i+1; j<5; j++) {
        str += j;
    }
    console.log(str);
}
