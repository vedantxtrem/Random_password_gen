// const n = document.querySelector("#length");




console.log(document.querySelector("#uper").checked);

const size = 6;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-+={}[].,<>";


// function up() {
//   let upperCase;
//   return upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// }
// function low() {
//   let lowerCase;
//   return lowerCase = "abcdefghijklmnopqrstuvwxyz"
// }
// function nu() {
//   let number;
//   return number = "0123456789"
// }
// function sy() {
//   let symbol;
//   return symbol = "@#$%^&*()_-+={}[].,<>"
// }




// const uper = document.querySelector("#uper");
// uper.addEventListener("click",upperCase = up());

// const lower = document.querySelector("#lower");
// lower.addEventListener("click",lowerCase = low());

// const num = document.querySelector("#num");
// num.addEventListener("click",number = num());

// const sym = document.querySelector("#symbol");
// sym.addEventListener("click",symbol = sy());


const allChars = upperCase + lowerCase + number + symbol;
console.log(allChars);

function createPassword() {
  let Password = "";
  Password += upperCase[Math.floor(Math.random() * upperCase.length)];
  Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  Password += number[Math.floor(Math.random() * number.length)];
  Password += symbol[Math.floor(Math.random() * symbol.length)];

  while (size > Password.length) {
    Password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return Password;
}

const btn = document.getElementById("button");

btn.addEventListener("click", function printer() {
  document.getElementById("pass").value = createPassword();
});