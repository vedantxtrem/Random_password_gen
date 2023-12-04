// const n = document.querySelector("input[type=number");

function bigchecked() {
  let upperCase;
  if (document.querySelector("#uper").checked ) {
    return upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
}

function smchecked() {
  let lowerCase;
  if (document.querySelector("#lower").checked) {
    return lowerCase = "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
}

function numchecked() {
  let number;
  if (document.querySelector("#num").checked ) {
    return number = "0123456789";
  }
  return "";
}
function sigchecked() {
  let symbol;
  if (document.querySelector("#symbol").checked ) {
    return symbol = "@#$%^&*()_-+={}[].,<>";
  }
  return "";
}
 



const size = 8;

const upperCase = bigchecked();
const lowerCase = smchecked();
const number = numchecked();
const symbol = sigchecked();

const allChars =  upperCase + lowerCase + number + symbol;

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

