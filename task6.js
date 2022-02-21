<p id="display"></p>
   const number = ParseInt(prompt("Enter a number : "))
   let value = "";

   const ttable = function (enumber) {
       value = number + "x" + enumber + "=" + number *enumber;
       return value;
   }
       
   let strDisplay = "";
   for (let i = 1; i <= 12; i++) {
       strDisplay += ttable(i) + "<br>";

   }
   document.getElementById("display").innerHTML = strDisplay;


   let refToTask6Div = document.querySelector("#task6");
refToTask6Div.innerHTML = str;