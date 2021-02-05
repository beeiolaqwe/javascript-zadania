//zad1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    
    this.changeAge = age => this.age = age;
    this.changeCity = city => this.city = city;
}

const user1 = new Person('Mateusz', 'Kapusta', 25, 'Poland', 'Cracov', 'Polish')
const user2 = new Person('Mateusz2', 'Kapusta2', 252, 'Poland2', 'Cracov2', 'Polish')

user1.changeAge(100000)
console.log(user1)
console.log(user2)

//zad2
function Kalkulator() {
    this.hisoria = [];
    this.dodaj = (a, b) => {
        this.hisoria.push([a, b, '+', a+b]);
        return a+b;
    };
    this.odejmij = (a, b) => {
        this.hisoria.push([a, b, '-', a-b]);
        return a-b;
    };
    this.pomnoz = (a, b) => {
        this.hisoria.push([a, b, '*', a*b]);
        return a*b;
    };
    this.podziel = (a, b) => {
        this.hisoria.push([a, b, '/', a/b]);
        return a/b;
    }
    this.wyczyscPamiec = () => this.hisoria = [];
    this.wypiszPamiec = () => this.hisoria.forEach((val) => 
        console.log(`${val[0]} ${val[2]} ${val[1]} = ${val[3]}`)
    );
}
var calc = new Kalkulator(), calc2 = new Kalkulator();
calc.dodaj(2, 2);
calc.pomnoz(9, 12);
calc.odejmij(3.2, 12);
calc2.podziel(12, 3);

calc.wypiszPamiec();
calc2.wypiszPamiec();
calc.wyczyscPamiec();
calc.wypiszPamiec();
calc2.wypiszPamiec();


//zad3
console.log('GRA');
function Gra() {
    this.losuj = () => Gra.prototype.liczba = parseInt(Math.random()*11 + 1);
    this.wynik = () => Gra.prototype.liczba && console.log(Gra.prototype.liczba);
    this.sprawdzWygrana = () => 
        Gra.prototype.liczba > 5 ? this.wygrana() : this.wynik();
    this.losujCoSekunde = () => 
        Gra.prototype.randomCounterId = setInterval(this.losuj, 1000);
    this.sprawdzajWygrana = () =>
        Gra.prototype.winCounterId = setInterval(this.sprawdzWygrana, 1000);
    this.wygrana = () => {
        clearInterval(Gra.prototype.winCounterId);
        clearInterval(Gra.prototype.randomCounterId);
        console.log('Wygrana');
    };
}

var gra = new Gra(),
    licznik = new Gra();

gra.sprawdzajWygrana();
gra.losujCoSekunde();
