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

//function would return the final password.
function generatePassword(){
  var finalResult = "";

  //Question for user
  var length = prompt("How many characters do you want in your password? Please choose numbers between 8 and 128!");
  // function determines whether a value is an illegal number or not.
  if(isNaN(length)){
    alert("You must enter a number!");
    return generatePassword()
  }
  // user will get an alert if they pick a number outside the mentioned range.
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }

//Questions for user to answer
  var incUpper = confirm("Do you want to include upper case letters?");
  var incLower = confirm("Do you want to include lower case letters?");
  var incNumbers = confirm("Do you want to include numbers?");
  var incSpecial = confirm("Do you want to include special characters?");

//User will get an alert to choose at least one character type
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
  finalResult += Characters.charAt(Math.floor(Math.random() * Characters.length));
}
return finalResult;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }