//zad1
console.log(document.getElementById('buz').parentNode);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentNode);
console.log(document.getElementById('foo').firstElementChild);

var elem = document.getElementById('foo').children;
console.log(elem[Math.floor(elem.length/2)]);

//zad2
function listen(id){
    document.getElementById(id).addEventListener("click", (e) => {
        
        console.log(e.target.querySelector('div').innerText);
        
    })
}


listen("ex2”);

//zad3
const ex3 = document.querySelectorAll("#ex3 button");
ex3.forEach(btn => {
    btn.addEventListener("click", function(){
        if (btn.nextElementSibling.style.display === "none") btn.nextElementSibling.style.display = 'inline';
        else btn.nextElementSibling.style.display = 'none';
    })
})

//zad4
Math.floor(Math.random()*16777215).toString(16); 



const changeParentColor = (parent) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  parent.style.backgroundColor = randomColor;
};


addEventOnButtons();

//zad5
const x = 5;
document.querySelectorAll('#ex5 div').forEach((div)=>{
    div.addEventListener('mouseover', function(){
        let color = this.style.backgroundColor;
        let element;
        
        if (x===1) {
            element = div.parentElement.querySelectorAll('li:first-of-type');   
        } else if(x===2) {
            element = div.parentElement.querySelectorAll('li:last-of-type');
        } else if (x===3){
            element = div.parentElement.querySelectorAll('li:nth-of-type(even)');
        } else if (x===4){
            element = div.parentElement.querySelectorAll('li');
        } else if (x===5){
            element = div.parentElement.querySelectorAll('ul');
        }
        element.forEach((elem) => {
            elem.style.backgroundColor = color;
        })

    }
  )
})

//zad6
var elem = document.getElementById('ex6')

var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;

var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(firstElem, secondElem, thirdElem);
