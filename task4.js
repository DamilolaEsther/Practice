numberOfLines = parseInt(numberOfLines);
let task4_str = "<ul>";
for (let line = 1; line <= numberOfLines; line++) {
  task4_str += `<li>${line} ${lineToWrite}</li>`;
}
task4_str += "</ul>";

let refToTask4Div = document.querySelector("#task4");
refToTask4Div.innerHTML = task4_str;
