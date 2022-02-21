let number = prompt("Enter a number");
let refToTaskDiv = document.querySelector("#task1");
// set the HTMLcontent
refToTaskDiv.innerHTML = `Your number is ${number}`;