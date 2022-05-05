const timesTable = function(number) {
    let str = "";
    let firstFactor = number;
    let secondFactor = 1;
    while (secondFactor <= 12) {
    let product = firstFactor * secondFactor;
    str += `${firstFactor} X ${secondFactor} = ${product}<br>`;
    secondFactor++;
    }
    str+= `<br> ---------------------- <br>`;
    return(str);
    }
    
    task6_str = "";
    for (let number = 1; number <= 12; number++) {
    task6_str += timesTable(number);
    }
    
    let refTotask6Div = document.querySelector("#task6");
    refTotask6Div.innerHTML = task6_str;