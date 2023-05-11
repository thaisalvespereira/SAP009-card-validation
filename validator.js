const validator = {
    
  isValid(CardNumber) {
    const newArray = [];//array vazio para receber os dados que o usuário colocar
    for (let i = 0; i < CardNumber.length; i++) {
      const numCard = parseInt(CardNumber[i]);//Analisa a string e retorna um número, o que evita erros de concatenação
      newArray.push(numCard)//O .push adiciona novos elementos ao array; ou seja, os números que serão recebidos no input serão alinhados aqui
    }

    const cardNumReverse = newArray.reverse();//Uma nova variável receber a string, que será revertida pelo .reverse()
    for (let i = 0; i < cardNumReverse.length; i++) {
      if ((i + 1) % 2 === 0) {//Esse i+1 vai dizer ao JS que ele precisa começar do segundo elemento
        cardNumReverse[i] = cardNumReverse[i] * 2;//Agora ele vai pegar cada posição par (indicada pelo [i]) e vai multiplicar por 2
      }
      if (cardNumReverse[i] >= 10) {
        cardNumReverse[i] = cardNumReverse[i] - 9;//Se o número for maior ou igual a 10, ele vai subtrair 9
      }
    }

    let finalSum = 0
    for (let i = 0; i < cardNumReverse.length; i++) {//reutiliza a const cardNumReverse que está "guardando" o array invertido
      finalSum = finalSum + cardNumReverse[i]
    }

    if (finalSum % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify(CardNumber) {
    const maskNumber = [];//Array vazio para receber os dados que não temos de antemão (usuário que vai informar)
    for (let i = 0; i < CardNumber.length; i++) {
      if (i < CardNumber.length - 4) {//Isso vai "isolar" os 4 últimos números
        maskNumber.push("#");//Vai substituir os números por # até chegar aos 4 dígitos finais
      } else {
        maskNumber.push(CardNumber[i])//Vai manter os números normais
      }
    }
    const masked = maskNumber.join("");
    return masked;
  }
}
export default validator;