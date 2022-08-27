// Assignment Code


//Special 33 - 47 && 58 - 64 && 91 - 96 && 123 - 126

//Numbers 48 - 57

//Letters (uppercase) 65 - 90 && (lowercase) 97 - 122 


function generatePassword(length, require) {
    console.log(require);
    let pass = '';
    for(let i = 0; i < length; i++) {
      let letter = Math.floor(Math.random() * 93) + 33;
      console.log(letter);
      if(require[0] == false && require[1] == false && require[2] == false && require[3] == false) {
        return pass = "REGENERATE PASSWORD";
      }
  
      if(require[0] == true && require[1] == true && require[2] == true && require[3] == true) {
        pass += String.fromCharCode(letter);
      }
  
      // 1 false 3
      if (require[0] == true && require[1] == true && require[2] == true && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
      // 1 false 2
      if (require[0] == true && require[1] == true && require[2] == false && require[3] == true) {
        while(letter >= 48 && letter <= 57) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
      // 1 false 1
      if (require[0] == true && require[1] == false && require[2] == true && require[3] == true) {
        while(letter >= 97 && letter <= 122) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
      // 1 false 0
      if (require[0] == false && require[1] == true && require[2] == true && require[3] == true) {
        while(letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      // 2 false 3
      if (require[0] == true && require[1] == true && require[2] == false && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 48 && letter <= 57) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
  
      }
  
      if (require[0] == true && require[1] == false && require[2] == true && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 97 && letter <= 122) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      if (require[0] == false && require[1] == true && require[2] == true && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
  
      }
  
      // 2 false 2
      if (require[0] == true && require[1] == false && require[2] == false && require[3] == true) {
        while(letter >= 48 && letter <= 57 || letter >= 97 && letter <= 122) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      if (require[0] == false && require[1] == true && require[2] == false && require[3] == true) {
        while(letter >= 48 && letter <= 57 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      // 2 false 1 
      if (require[0] == false && require[1] == false && require[2] == true && require[3] == true) {
        while(letter >= 97 && letter <= 122 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      // 3 false 3
      if (require[0] == true && require[1] == false && require[2] == false && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 48 && letter <= 57 || letter >= 97 && letter <= 122) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      if (require[0] == false && require[1] == true && require[2] == false && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 48 && letter <= 57 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      if (require[0] == false && require[1] == false && require[2] == true && require[3] == false) {
        while(letter >= 33 && letter <= 47 || letter >= 58 && letter <= 64 || letter >= 91 && letter <= 96 || letter >= 123 && letter <= 126 || letter >= 97 && letter <= 122 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
  
      if (require[0] == false && require[1] == false && require[2] == false && require[3] == true) {
        while(letter >= 48 && letter <= 57 || letter >= 97 && letter <= 122 || letter >= 65 && letter <= 90) {
          letter = Math.floor(Math.random() * 93) + 33;
        }
        pass += String.fromCharCode(letter);
      }
    }
  
    return pass;
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  let require = [];
  
  
  
  
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    console.log("greer");
  
    let aNumber = Number(window.prompt("Enter the desired length of the Password greater than 8 and less than 128", ""));
    console.log(aNumber);
  
  
    if(aNumber >= 8 && aNumber <= 128) {
      if (confirm("Include Uppercase?") == true) {
        alert("Added")
        require[0] = true;
      } else {
        require[0] = false;
      }
  
      if (confirm("Include Lowercase?") == true) {
        alert("Added")
        require[1] = true;
      } else {
        require[1] = false;
      }
      
      
      
      if (confirm("Include Numbers?") == true) {
        alert("Added")
        require[2] = true;
      } else {
        require[2] = false;
      }
      
      if (confirm("Include Special Characters?") == true) {
        alert("Added")
        require[3] = true;
      } else {
        require[3] = false;
      }
      
  
      let password = generatePassword(aNumber, require);
      let passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);