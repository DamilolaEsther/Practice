let professor = prompt("Who are the lines for?");
let lineToWrite = prompt("What is the line?");
let numberOfLines = prompt("How many lines?");
numberOfLines = parseInt(numberOfLines);

function lineWriter(numberOfLines) {
let task5_str = "<ul>";
for (let line = 1; line <= numberOfLines; line++) {
task5_str += `<li>${line} ${lineToWrite}</li>`;
}
task5_str += "</ul>";
return task5_str;
}

const meanProfessorTitler = function(professor){
return(`<h1> ${professor} </h1>`);
}
let refToTask5Div = document.querySelector("#task5");
refToTask5Div.innerHTML = meanProfessorTitler(professor);
refToTask5Div.innerHTML += lineWriter(numberOfLines);