todo = [];
let operation = prompt("Enter operation(show,add,delete,quit)");
while (true) {
  if (operation == "quit") {
    console.log("Quit");
    break;
  }
  else if (operation == "show") {
    console.log("---------------------------");
    for (let i = 0; i <todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------------------------");
  }
  else if (operation == "add") {
    let task = prompt("Enter task");
    todo.push(task);
    console.log(`added task: ${task}`);
  }
  else if (operation == "delete") {
    idx = prompt("Enter index of task to delete");
    console.log(`deleted task: ${todo[idx]}`);
    todo.splice(idx, 1);
  }
  else {
    console.log("ERROR: Unknown operation");
  }
  operation = prompt("Enter operation(show,add,delete)");
}