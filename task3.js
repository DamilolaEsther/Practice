let professor = prompt("Who are the lines for?");
let lineToWrite = prompt("What is the line?");
let numberOfLines = prompt("How many lines?");

numberOfLines = parseInt(numberOfLines);

for (let line = 1; line <= numberOfLines; line++) {
  console.log(`${line} ${lineToWrite}`);
}
let refTotask3Div = document.querySelector("#task3");
