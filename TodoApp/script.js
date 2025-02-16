let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let removeBtns = document.querySelectorAll('.remove');

btn.addEventListener('click', addTask);
function addTask() {
  let task = input.value;
  if (task.trim().length != 0) {
    let li = document.createElement('li');
    li.innerText = task;
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove');
    li.appendChild(removeBtn);
    ul.appendChild(li);
    input.value = "";
  }  
}
//only del the elements which are already present
// dont remove newly added elements
// for (removeBtn of removeBtns) {
//   removeBtn.addEventListener('click', removeTask);
// }
// function removeTask() {
//   let item = this.parentElement;
//   ul.removeChild(item);
//   console.log(item);
// }
//event delegation
ul.addEventListener('click', removeTask2);
function removeTask2(event) {
  if (event.target.nodeName == 'BUTTON') {
    let item = event.target.parentElement;
    item.remove();
  }
}