const input = document.getElementById('firstEntery');
const result = document.getElementById('resultSpace');
const unitOne = document.getElementById('inputCurrency');
const btn = document.getElementById('conBtn');
const but = document.getElementById('butn');
const unitTwo = document.getElementById('outputCurrency');
const closeMsg = document.getElementById('close');
const modal = document.getElementById('modals');
let answer;

btn.addEventListener("click", convert);
closeMsg.addEventListener("click", close);
but.addEventListener("click", mod);
// console.log(modal);


function mod() {
      modal.style.display = "block";
};


function convert() {
      

      if(unitOne.value == "dol" && unitTwo.value == "N") {
            answer = input.value * 610;
      } 
      
      if (unitOne.value == "Nil" || unitTwo.value == "Nil") {
             answer = mod();
             
      }
      
      if (unitOne.value == "N" && unitTwo.value == "N") {
            answer = mod();
             
      } 
      
      if (unitOne.value == "dol" && unitTwo.value == "dol") {
            answer = mod(); 
            
      }

      if (unitOne.value == "dol" && unitTwo.value == "P"){
            answer = input.value * 0.79;
      }

      if (unitOne.value == "dol" && unitTwo.value == "E"){
            answer = input.value * 0.93;
      }

      if (unitOne.value == "dol" && unitTwo.value == "YE"){
            answer = input.value * 128.12;
      }

      if (unitOne.value == "dol" && unitTwo.value == "YU"){
            answer = input.value * 6.67;
      }

      if (unitOne.value == "P" && unitTwo.value == "P") {
            answer = mod(); 
            
      }

      if (unitOne.value == "E" && unitTwo.value == "E") {
            answer = mod(); 
      }

      if (unitOne.value == "YE" && unitTwo.value == "YE") {
            answer = mod(); 
      }

      if (unitOne.value == "YU" && unitTwo.value == "YU") {
            answer = mod(); 
      }
      
      
      if (unitOne.value == "N" && unitTwo.value == "dol")
      {
            answer = input.value/610;
      }

      if (unitOne.value == "N" && unitTwo.value == "P")
      {
            answer = input.value * 0.0019;
      }

      if (unitOne.value == "N" && unitTwo.value == "E")
      {
            answer = input.value * 0.0022;
      }

      if (unitOne.value == "N" && unitTwo.value == "YE")
      {
            answer = input.value * 0.31;
      }

      if (unitOne.value == "N" && unitTwo.value == "YU")
      {
            answer = input.value * 0.016;
      }
      
      if (unitOne.value == "P" && unitTwo.value == "dol")
      {
            answer = input.value/0.79;
      }
      
      if (unitOne.value == "P" && unitTwo.value == "N")
      {
            answer = input.value * 610;
      };

      if (unitOne.value == "P" && unitTwo.value == "E")
      {
            answer = input.value * 0.61;
      }

      if (unitOne.value == "P" && unitTwo.value == "YE")
      {
            answer = input.value * 0.761;
      }

      if (unitOne.value == "P" && unitTwo.value == "YU")
      {
            answer = input.value * 0.96;
      }

      if (unitOne.value == "E" && unitTwo.value == "dol")
      {
            answer = input.value * 0.96;
      }

      if (unitOne.value == "E" && unitTwo.value == "N")
      {
            answer = input.value * 296;
      }

      if (unitOne.value == "E" && unitTwo.value == "YE")
      {
            answer = input.value * 5.96;
      }

      if (unitOne.value == "E" && unitTwo.value == "YU")
      {
            answer = input.value * 3.96;
      }

      if (unitOne.value == "YE" && unitTwo.value == "YU")
      {
            answer = input.value * 56;
      }

      if (unitOne.value == "YE" && unitTwo.value == "dol")
      {
            answer = input.value / 5.96;
      }

      if (unitOne.value == "YE" && unitTwo.value == "N")
      {
            answer = input.value * 1.96;
      }

      if (unitOne.value == "YE" && unitTwo.value == "P")
      {
            answer = input.value / 256;
      }

      if (unitOne.value == "YE" && unitTwo.value == "E")
      {
            answer = input.value / 2.58;
      }

      if (unitOne.value == "YU" && unitTwo.value == "YE")
      {
            answer = input.value * 1.96;
      }

      if (unitOne.value == "YU" && unitTwo.value == "dol")
      {
            answer = input.value * 2.96;
      }

      if (unitOne.value == "YU" && unitTwo.value == "N")
      {
            answer = input.value * 196;
      }

      if (unitOne.value == "YU" && unitTwo.value == "P")
      {
            answer = input.value * 256;
      }

      if (unitOne.value == "YU" && unitTwo.value == "E")
      {
            answer = input.value * 2.58;
      }


      result.value = answer;

      input.value = 0;
      

}