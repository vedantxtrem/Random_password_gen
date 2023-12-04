

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-+={}[].,<>";



const lengthInput = document.querySelector("#length");
const upperCheckbox = document.querySelector("#uper");
const lowerCheckbox = document.querySelector("#lower");
const numCheckbox = document.querySelector("#num");
const symbolCheckbox = document.querySelector("#symbol");

const btn = document.getElementById("button");
const passwordInput = document.getElementById("pass");

btn.addEventListener("click", function () {
  const size = lengthInput.value;
  let selectedChars = "";

  if (upperCheckbox.checked) selectedChars += upperCase;
  if (lowerCheckbox.checked) selectedChars += lowerCase;
  if (numCheckbox.checked) selectedChars += number;
  if (symbolCheckbox.checked) selectedChars += symbol;

  if (!selectedChars) {
    alert("Please select at least one character type.");
    return;
  }

  passwordInput.value = createPassword(size, selectedChars);
  
});

function createPassword(size, chars) {
  let password = "";
  for (let i = 0; i < size; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
