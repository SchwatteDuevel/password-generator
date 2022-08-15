const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pwField = document.getElementById("pw");
const btn = document.getElementById("password-btn");
const copybtn = document.getElementById("clipboard");
const pwlength = document.getElementById("range");
const rangeNum = document.getElementById("rangeNum");
const selectNum = document.getElementById("selectNum");
const selectChar = document.getElementById("selectChar");

/* Range Slider checks value and shows it */
pwlength.addEventListener("mousemove", function() {  
  rangeNum.innerHTML = pwlength.value;
}) 

/* Click on password button */
btn.addEventListener("click", function()  {
let pw = "";
for(let i=0; i<pwlength.value; i++) {
  let pwnum = Math.floor(Math.random() * characters.length);
  pw += characters[pwnum];
  }
pwField.textContent = pw;
})

/* Copy to clipboard */
copybtn.addEventListener("click", function() {
  navigator.clipboard.writeText(pwField.textContent);
  pwField.textContent = "";
})

