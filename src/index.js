import validator from './validator.js';

document.getElementById("expiry").addEventListener("input", function () {
    var i = document.getElementById("expiry").value.length;
    if (i === 2)
        document.getElementById("expiry").value = document.getElementById("expiry").value + "/";
});

const btnCard = document.getElementById("btnValidate");
const alertCard = document.getElementById("cardResult");
btnCard.addEventListener('click', cardValidator);

function cardValidator() {
    const CardNumber = document.getElementById("number").value;
    const finalResult = validator.isValid(CardNumber);
    const maskedNumbers = validator.maskify(CardNumber)

    if (CardNumber === "") {
        return alertCard.innerText = "Por favor, digite o número do seu cartão.";
    } else if (CardNumber.length <= 16) {
        return alertCard.innerText = "Faltam alguns dígitos no número do seu cartão. Favor verificar.";
    } else if (finalResult === true) {
        return alertCard.innerText = "O seu cartão de número " + maskedNumbers + " é válido";
    } else {
        return alertCard.innerText = "Infelizmente, o seu cartão de número " + maskedNumbers + " não está válido. Favor verificar.";
    }
}

console.log(validator);