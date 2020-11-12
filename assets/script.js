// Define variables
var userinput;
var picknumber;
var pickSpecialCharacter;
var pickUppercase;
var pickLowercase;
var picks;
var specialcharacter = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    document.getElementById("password").placeholder = password;
});

function generatePassword() {
    userinput = prompt("Please choose between 8 and 128 characters for your password");
    if (!userinput) {
        alert("No empty value");

    } else if (userinput < 8 || userinput > 128) {
        userinput = prompt("Choose between 8 and 128");

    } else {
        picknumber = confirm("Do you want to include numbers?");
        pickSpecialCharacter = confirm("Do you want to include special characters?");
        pickUppercase = confirm("Do you want to include Uppercase letters?");
        pickLowercase = confirm("Do you want to include Lowercase letters?");
    };

    if (!pickSpecialCharacter && !picknumber && !pickUppercase && !pickLowercase) {
        picks = alert("You didn't choose anything");

    }

    else if (pickSpecialCharacter && picknumber && pickUppercase && pickLowercase) {

        picks = specialcharacter.concat(number, letter, uppercaseletter);
    }
    else if (pickSpecialCharacter && picknumber && pickUppercase) {
        picks = specialcharacter.concat(number, uppercaseletter);
    }
    else if (pickSpecialCharacter && picknumber && pickLowercase) {
        picks = specialcharacter.concat(number, letter);
    }
    else if (pickSpecialCharacter && pickLowercase && pickUppercase) {
        picks = specialcharacter.concat(letter, uppercaseletter);
    }
    else if (picknumber && pickLowercase && pickUppercase) {
        picks = number.concat(letter, uppercaseletter);
    }
    else if (pickSpecialCharacter && picknumber) {
        picks = specialcharacter.concat(number);

    } else if (pickSpecialCharacter && pickLowercase) {
        picks = specialcharacter.concat(letter);

    } else if (pickSpecialCharacter && pickUppercase) {
        picks = specialcharacter.concat(uppercaseletter);
    }
    else if (pickLowercase && picknumber) {
        picks = letter.concat(number);

    } else if (pickLowercase && pickUppercase) {
        picks = letter.concat(uppercaseletter);

    } else if (picknumber && pickUppercase) {
        picks = number.concat(uppercaseletter);
    }
    else if (pickSpecialCharacter) {
        picks = specialcharacter;
    }
    else if (picknumber) {
        picks = number;
    }
    else if (pickLowercase) {
        picks = letter;
    }
    else if (pickUppercase) {
        picks = uppercaseletter;
    };

    var password = [];


    for (var i = 0; i < userinput; i++) {
        var randompick = picks[Math.floor(Math.random() * picks.length)];
        password.push(randompick);
    }

    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;

}

var copy = document.querySelector("#password");
    copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
}