//zad1
const lists = document.querySelectorAll('.list');

console.log(lists);

//zad2
function getElementsByTag(tag){
    return document.querySelectorAll(tag);
}

const elements = getElementsByTag("li");
console.log(elements)

//zad3
var list = document.getElementById("list"); 

console.log(list);

//zad4
function showTags(selector){
    console.log(selector);
}
//1
showTags(document.querySelectorAll('li'));
//2
showTags(document.querySelectorAll('ul'));
//3
showTags(document.querySelectorAll('span'));
//4
showTags(document.querySelectorAll('div.list span'));
//5
showTags(document.querySelectorAll('div#spans span'));
