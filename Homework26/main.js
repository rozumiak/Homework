class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}
class TextElement extends FormElement{
    constructor(name, type, value, placeholderText) {
        super(name, type, value);
        this.placeholder = placeholderText;

    }
    createTextInput(){
        const textInput = document.createElement("input");
        textInput.type = this.type;
        textInput.value = this.value;
        textInput.name = this.name;
        textInput.placeholder = this.placeholder;
        return textInput
    }
    getValue() {
        const input = document.querySelector(`input[name="${this.name}"]`);
        return input.value;
    }
}

class CheckboxElement extends FormElement{
    constructor(name, type, value, checked) {
        super(name, type, value)
        this.checked = checked;

    }
    createCheckboxElement(){
        const checkboxInput = document.createElement("input");
        checkboxInput.type = this.type;
        checkboxInput.name = this.name;
        checkboxInput.value = this.value;
        checkboxInput.checked = this.checked;
        return checkboxInput;
    }
    getValue() {
        const input = document.querySelector(`input[name="${this.name}"]`);
        return input.checked;
    }

}

class ButtonElement extends FormElement{
    constructor(name, type, value) {
        super(name, type, value);
    }
    createButton(){
        const button = document.createElement("button");
        button.type = this.type;
        button.name = this.name;
        button.innerText = this.value;
        return button;
    }

}

const _form = document.createElement('form');

const inputName = new TextElement('name', 'text', '', 'Your name');
const inputEmail = new TextElement('email', 'email', '', 'Your Email');
const inputPassword = new TextElement('password1', 'password', '', 'Password');
const inputRepeatPassword = new TextElement('password2', 'password', '', 'Repeat your password');
const checkboxElement = new CheckboxElement('checkbox-input', 'checkbox', '', true);
const buttonElement = new ButtonElement('btn', 'submit', 'Register');

const text = document.createTextNode("I agree all statements in Term of service");

_form.appendChild(inputName.createTextInput());
_form.appendChild(inputEmail.createTextInput());
_form.appendChild(inputPassword.createTextInput());
_form.appendChild(inputRepeatPassword.createTextInput());
_form.appendChild(text);
_form.appendChild(checkboxElement.createCheckboxElement());
_form.appendChild(buttonElement.createButton());

_form.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log(`First Name: ${inputName.getValue()}`);
    console.log(`Email: ${inputEmail.getValue()}`);
    console.log(`Password: ${inputPassword.getValue()}`);
    console.log(`Password Repeat: ${inputPassword.getValue()}`);
    console.log(`Agreed to Terms: ${checkboxElement.getValue()}`);
})
document.body.appendChild(_form);