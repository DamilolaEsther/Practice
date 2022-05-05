let points = prompt("please enter points from exam");
points = parseInt(points);
let grade = "";

if (points > 90) {
    grade ="A";
}
 else if (points > 80) {
    grade ="B";
}
else if (points > 70) {
    grade = "C";
}
else if (points > 60) {
    grade ="D";
}
else {
    grade = "F"
}
let refToTask2Div = document.querySelector("#task2");
alert(grade);
alert(refToTask2Div);
refToTask2Div.innerHTML = `From your point value of ${points}, grade is a ${grade}`; 