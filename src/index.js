import validator from './validator.js';

const btnCard = document.getElementById("btnValidate");
const alertCard = document.getElementById("cardResult");
btnCard.addEventListener('click', cardValidator);
btnValidate.submit(function () {
    sendContactForm();
    return false;
});

function cardValidator() {
    const creditCardNumber = document.getElementById("number").value;
    const finalResult = validator.isValid(creditCardNumber);
    const maskedNumbers = validator.maskify(creditCardNumber)

    if (creditCardNumber === "") {
        return alertCard.innerText = "Por favor, digite o número do seu cartão.";
    } else if (creditCardNumber.length <= 13) {
        return alertCard.innerText = "Faltam alguns dígitos no número do seu cartão. Favor verificar.";
    } else if (finalResult === true) {
        return alertCard.innerText = "O seu cartão de número " + maskedNumbers + " é válido";
    } else {
        return alertCard.innerText = "Infelizmente, o seu cartão de número " + maskedNumbers + " não está válido. Favor verificar.";
    }
}

console.log(validator);