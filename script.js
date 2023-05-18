var generateBtn = document.querySelector("#generate");

function generatePassword() {
var uppercaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var passwordArray = [];
var trueArray = [];
var userInput = prompt("Enter a password length 8 to 128 characters.");
var confirmLow = confirm("Would you like to use lowercase letters?");
var confirmUp = confirm("Would you like to use uppercase letters?");
var confirmNumber = confirm("Would you like to include numbers?");
var confirmSymbol = confirm("Would you like to include symbols?");

if(confirmNumber) {
    passwordArray = passwordArray.concat(number);
}
if(confirmLow) {
    passwordArray = passwordArray.concat(lowercaseLet);
}
if(confirmUp) {
    passwordArray = passwordArray.concat(uppercaseLet);
}
if(confirmSymbol) {
    passwordArray = passwordArray.concat(symbol);
}


for (var i = 0; i < userInput; i++) {
    trueArray.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
}

return trueArray.join("");
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);