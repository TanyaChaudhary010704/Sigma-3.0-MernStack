//Q1
let btn = document.createElement('button');
let input = document.createElement('input');
document.body.appendChild(input);
document.body.appendChild(btn);
btn.innerText = "Click Me";
//Q2
input.placeholder = "username";
btn.id = "btn";
//Q3
console.log(document.querySelector("button"));
console.log(document.querySelector("#btn"));
btn.style.backgroundColor = "blue";
btn.style.color = "white";
//Q4
let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "DOM Practice"
h1.style.textDecoration = "underline";
h1.style.color = "purple";
//Q5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.appendChild(p);