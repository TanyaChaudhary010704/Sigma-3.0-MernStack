//Q1
let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '150vh';
div.style.backgroundColor = 'yellow';
function change(event) {
  console.log(event);
  div.innerText = event.type;
}
// div.addEventListener('mouseout',change);
// document.addEventListener('keypress',change);
// document.addEventListener('scroll',change);
// window.addEventListener('load',change);

//Q2
let btn = document.createElement('button');
btn.innerText = 'click me';
document.body.appendChild(btn);
btn.addEventListener('click', function () {
  btn.style.backgroundColor = 'green';
});
//Q3
let input = document.createElement('input');
let h2 = document.createElement('h2');
input.setAttribute('placeholder', 'enter your name');
document.body.appendChild(input);
document.body.appendChild(h2);
input.addEventListener('input', function () { 
  h2.innerText = input.value;
});