// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned Variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*,.+=(){}[]/";
var Characters = "";



// Event Listener added to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function gets called in and it would return the final password.
function generatePassword(){
  var result = "";

  //User answers a question that how many characters they want in their password between 8-128 characters.
  var length = prompt("How many characters do you want in your password? Please choose numbers between 8 and 128!");
  if(isNaN(length)){
    alert("You must enter a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }
//User answers few questions like if they want to include or not want to include upper case, lower case, number or special characters?
  var incUpper = confirm("Do you want to include upper case letters?");
  var incLower = confirm("Do you want to include lower case letters?");
  var incNumbers = confirm("Do you want to include numbers?");
  var incSpecial = confirm("Do you want to include special characters?");

//User will get an alert to choose at least one character type.
  if(!incUpper&&!incLower&&!incNumbers&&!incSpecial){
    alert("You must choose at least one character type!");
    return generatePassword()
  }
// Conditional statements
  if(incUpper){
    Characters += upper
  }
  if(incLower){
    Characters += lower
  }

  if(incNumbers) {
    Characters += numbers
  }

  if(incSpecial) {
    Characters += special
  }
  
// Result
for (var i = 0; i < length; i++) {
  result += Characters.charAt(Math.floor(Math.random() * Characters.length));
}
return result;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }