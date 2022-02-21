let professor = prompt("Professor Lines are for ");
let LineToWrite = Prompt("what's the line");
let numlines = prompt("How many lines?");
numlines = parseInt(numlines);

let str=``;
for (let line=1; line<numlines; line++) {
    console.log(`${line} : ${lineToWrite}`);
    str+=`${line} : ${LineToWrite}<br>`;
}

let refToTask3Div = document.querySelector("#task3");
refToTask3Div.innerHTML = str;
