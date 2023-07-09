const form = document.getElementById('form');
const passwordInput = form.querySelector('.js--psw');
//const errorList = form.querySelector('.js--error_list');
const errorLetter = form.querySelector('.js--error_letter');
const errorNumber = form.querySelector('.js--error_number');
const errorPunctuation = form.querySelector('.js--error_punctuation');
const errorChars = form.querySelector('.js--error_chars');
//const regEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?\/\s]).{8,}$/;
const regLetter = /[A-Z]/;
const regNumber = /\d/;
const regPunctuation = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?\/\s]/;

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    //const isValid = regEx.test(password);
    console.log(password.length);

    /*if (isValid) {
        errorList.classList.remove('error_list_show');
        errorList.classList.add('valid_list');
    } else {
        errorList.classList.remove('valid_list');
        errorList.classList.add('error_list_show');*/

    if (regLetter.test(password)) {
        errorLetter.classList.remove('error_list_show');
        errorLetter.classList.add('valid_list');
    } else {
        errorLetter.classList.remove('valid_list');
        errorLetter.classList.add('error_list_show');
    }

    if (regNumber.test(password)) {
        errorNumber.classList.remove('error_list_show');
        errorNumber.classList.add('valid_list');
    } else {
        errorNumber.classList.remove('valid_list');
        errorNumber.classList.add('error_list_show');
    }

    if (regPunctuation.test(password)) {
        errorPunctuation.classList.remove('error_list_show');
        errorPunctuation.classList.add('valid_list');
    } else {
        errorPunctuation.classList.remove('valid_list');
        errorPunctuation.classList.add('error_list_show');
    }

    if (password.length >= 8) {
        errorChars.classList.remove('error_list_show');
        errorChars.classList.add('valid_list');
    } else {
        errorChars.classList.remove('valid_list');
        errorChars.classList.add('error_list_show');
    }
    //}
});