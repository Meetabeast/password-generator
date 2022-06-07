const passwordSpan = document.getElementById("password");
const passwordLength = document.getElementById("passwordlength");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const getGenerate = document.getElementById("generatepassword")

var length = passwordLength.value || 10;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

console.log(passwordLength.value);

const getLowerCase = () => {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

const getUpperCase = () => {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

const getNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

const getSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword () {
    var password = "";

    if(upperCase.checked) {
        password += getUpperCase();
    }

    if(lowerCase.checked) {
        password += getLowerCase();
    }

    if(number.checked) {
        password += getNumbers();
    }

    if(symbol.checked) {
        password += getSymbol();
    }
   
    for (let i = password.length; i < passwordLength.value; i++) {
        const password_output = passwordArray()
        password += password_output;
    }

    passwordSpan.innerText = password;
    
}

function passwordArray() {
    const password_Array = [];
    if(upperCase.checked) {
        password_Array.push(getUpperCase());
    }

    if(lowerCase.checked) {
        password_Array.push(getLowerCase());
    }

    if(number.checked) {
        password_Array.push(getNumbers());
    }

    if(symbol.checked) {
        password_Array.push(getSymbol());
    }

    if(password_Array.length === 0) return "";

    return password_Array[Math.floor(Math.random() * password_Array.length)]
}

getGenerate.onclick = function() {
    generatePassword()
}

