//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password


var passLength = 0;
var valid_passlength = false;

//Prompt for length  of Password
var passLength = prompt("Enter length of password between 8 and 128 characters")

//check length to be between 8 and 128
while (passLength < 8 || passLength > 128) {
    alert("Password Length must be between 8 and 128 long");
    passLength = prompt("Enter length of password between 8 and 128");
    console.log("passLength=" + passLength);
}


//Prompt for type of characters if none is selected will continue to prompt
//Intialize all boolean to false for each character type
var isLower = false; var isUpper = false; var isSpecial = false; var isNum=false;

while (isLower == false && isUpper == false &&  isSpecial == false && isNum ==false){
    alert("You must Select at least One Character Type: lower case, upper case, special chars or numbers");
    isLower = confirm("Would you like lower case letters in your password?");
    isUpper = confirm("Would you like upper case letters in your password?");
    isSpecial = confirm("Would you like special characters in your password?");
    isNum = confirm("Would you like numbers in your password?");
 }

alert("You have selected: \r\n lower case: " + isLower + "\r\n" + "upper case: " + isUpper + "\r\n" + "special characters: " + isSpecial + "\r\n" + "numbers: " + isNum+  "\r\n" + "The password length: " + passLength + "\r\n \r\n CLICK ON GENERATE PASSWORD BUTTON");
//log all the char selections
console.log("isLower = " + isLower);
console.log("isUpper= " + isUpper)
console.log("isLower = " + isSpecial);
console.log("isNum= " + isNum);



function generatePassword() {
    //This function will execute when Generate Password button is clicked
    //Initialize all Strings for each character type
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var lowChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    //Intialize variables for the password and the boolean flag for when the password has completed generating
    var password = "";
    var passdone = false;


    // Perform this loop and continue adding chars to password until the length of the generated password equals the length specified by user
    while ( password.length < passLength) {
        console.log("password.length= " + password.length);
        console.log("passLength = " + passLength);

        if (isLower == true && password.length < passLength && passdone == false) {
            //add a random charact from lowerCars to password
            var char =  lowChars[Math.floor(Math.random() * lowChars.length)];
            password = password + char;
            console.log("islower:" + password);
            console.log("inside if passLength = " + passLength);
            console.log("inside if password length = " + password.length);
            if (password.length == passLength){
                console.log("inside break if password length=" + password.length);
                console.log("inside break if passLength=" + passLength);
                passdone = true;
                break;
            }
            console.log("bottom of while passdone = " + passdone);
         }

         if (isNum == true && password.length < passLength && passdone == false) {
            //add a random charact from UpperrChars to password
            var char =  numeric[Math.floor(Math.random() * numeric.length)];
            password = password + char;
            console.log("isNUmerice:" + password);
            console.log("IsNumeric inside if passLength = " + passLength);
            console.log("IsNumericinside if password length = " + password.length);
            if (password.length == passLength){
                console.log("IsUppernside break if password length=" + password.length);
                console.log("IsUpperinside break if passLength=" + passLength);
                passdone = true;
                break;
            }
            console.log("IsNumof while passdone = " + passdone);
         }

         if (isSpecial == true && passdone == false) {
            //add a random charact from UpperrChars to password
            var char =  specialChars[Math.floor(Math.random() * specialChars.length)];
            password = password + char;
            console.log("isSpecial:" + password);
            console.log("IsSpecial inside if passLength = " + passLength);
            console.log("IsSpecailinside if password length = " + password.length);
            if (password.length == passLength){
                console.log("IsUppernside break if password length=" + password.length);
                console.log("IsUpperinside break if passLength=" + passLength);
                passdone = true;
                break;
            }
            console.log("IsUpperbottom of while passdone = " + passdone);
         }

         if (isUpper == true && password.length < passLength && passdone == false) {
            //add a random charact from UpperrChars to password
            var char =  upperChars[Math.floor(Math.random() * upperChars.length)];
            password = password + char;
            console.log("isSpecial:" + password);
            console.log("IsSpecial inside if passLength = " + passLength);
            console.log("IsSpecailinside if password length = " + password.length);
            if (password.length == passLength){
                console.log("IsUppernside break if password length=" + password.length);
                console.log("IsUpperinside break if passLength=" + passLength);
                passdone = true;
                break;
            }
            console.log("IsUpperbottom of while passdone = " + passdone);
         }



    }

    return password;
   
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
     /* Get the text field */
   var copyText= document.getElementById("password");

  /* Select the text field */
 copyText.select();
 // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER for copy button
copyBtn.addEventListener("click",copyToClipboard);

