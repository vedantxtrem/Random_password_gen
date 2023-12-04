// const n = document.querySelector("#length");

const upperCase = "";
const lowerCase = "";
const number = "";
const symbol = "";


console.log(document.querySelector("#uper").checked);

const size = 6;



const uper = document.querySelector("#uper");
uper.addEventListener("checked", upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const lower = document.querySelector("#lower");
lower.addEventListener("checked", lowerCase = "abcdefghijklmnopqrstuvwxyz");

const num = document.querySelector("#num");
num.addEventListener("checked", number = "0123456789");

const sym = document.querySelector("#symbol");
sym.addEventListener("checked", symbol = "@#$%^&*()_-+={}[].,<>");


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