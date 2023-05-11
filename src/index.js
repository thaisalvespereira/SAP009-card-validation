import validator from './validator.js';

document.getElementById("expiry").addEventListener("input", function () {
  const i = document.getElementById("expiry").value.length;
  if (i === 2)
    document.getElementById("expiry").value = document.getElementById("expiry").value + "/";//mascara para a data
});

const btnCard = document.getElementById("btnValidate");
const alertCard = document.getElementById("cardResult");
btnCard.addEventListener('click', cardValidator);
function cardValidator(event) {//evento que impede o formulario de ficar atualizando
  event.preventDefault();
  const CardNumber = document.getElementById("number").value;
  const finalResult = validator.isValid(CardNumber);//formula que está no Validator
  const maskedNumbers = validator.maskify(CardNumber);//formula que está no Validator
  if (CardNumber === "") {
    return alertCard.innerText = "Por favor, digite o número do seu cartão.";//o resultado sai no paragrafo a baixo do botão
  } else if (CardNumber.length <= 13) {
    return alertCard.innerText = "Faltam alguns dígitos no número do seu cartão. Favor verificar.";
  } else if (finalResult === true) {
    return alertCard.innerText = "O seu cartão de número " + maskedNumbers + " é válido";
  } else {
    return alertCard.innerText = "Infelizmente, o seu cartão de número " + maskedNumbers + " não está válido. Favor verificar.";
  }
}

console.log(validator);