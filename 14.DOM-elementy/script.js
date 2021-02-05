// zad1
function zad1(list) {
    if (!Array.isArray(list)) {
        list = Array.from(list);
    }
    return list.map((el) => el.tagName);
}
console.log(zad1(document.querySelectorAll('.more-divs')));

// zad2
function zad2(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}
zad2(document.querySelector('.short-list'));

// zad3
function zad3(liczby) {
    return Object.values(liczby).reduce((sum, val) =>
        sum + (isNaN(val) ? 0 : parseInt(val)), 0);
}
console.log(zad3(document.getElementById('datasetCheck').dataset));

// zad4
document.getElementById('spanText').innerHTML = 'dowolny';

// zad5
document.getElementById('spanText').className = 'dowolną';

// zad6
function zad6(listaKlas) {
    console.log(listaKlas);
    listaKlas.forEach(klasa => console.log(klasa));
    console.log(Object.values(listaKlas).join(' + '));
}
zad6(document.getElementById('classes').classList);

// zad7
function zad7(list) {
    console.log(list);
    list.forEach((el) => !el.dataset.text && (el.dataset.text = 'text'));
}
zad7(longList.querySelectorAll('#longList li'));

// zad 8
function zad8(className) {
    let obj = {newClass: className};
    zada8_1(obj);
}

function zad8_1(obj) {
    let zmienna = obj.newClass;
    document.getElementById('myDiv').className = zmienna;
}

zada8('string_z_parametru');

//zad9
function zad9(rand) {
    document.getElementById('numbers').className = rand%2===0 ? 'even' : 'odd';
}
zad9(parseInt(Math.random()*11));

//zad10
function zad10(element) {
    return Object.values(element.querySelectorAll('li')).map((li) => li.innerHTML);
}
console.log(zadanie10(document.getElementById('longList')));

//zad11
function zad11(lis) {
    Object.values(lis).forEach((li) => li.innerHTML = parseInt(Math.random()*11));
}
zadanie11(document.getElementById('longList').children);
