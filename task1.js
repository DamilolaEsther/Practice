// Use the prompt call to get input as a string
let number = prompt("Please enter a number");

// Find the reference to the div with id of task1
let refToTask1 = document.querySelector("#task1");

// Set the innerHTML property
refToTask1.innerHTML =
`The number you entered is ${number}`;



