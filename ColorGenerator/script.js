let btn = document.querySelector('button');
let h = document.querySelector('h1');
let div = document.querySelector('div');

btn.addEventListener('click', ()=> {
  let color = generateColor();
  div.style.backgroundColor = color;
  h.style.color = color;
  h.innerHTML = color;
});

function generateColor() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}