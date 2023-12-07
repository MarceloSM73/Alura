alert('Seja bem-vindo ao Jogo do Número Screto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O código secreto é: ${numeroSecreto}`);

let chute;
let tentativas = 1;
console.log(`Seu chute foi: ${chute}`);
console.log(`Resultado da comparação: ${chute == numeroSecreto}`);

// while => enquanto (condição)
while (chute != numeroSecreto){
    chute = prompt(`Informe um número entre 1 e ${numeroMaximo}: `);
   
    if (chute == numeroSecreto) {
      break;
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    // tentativas = tentativas +1
    tentativas++;
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o numero secreto  ${numeroSecreto}, com ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1){
//  alert(`Parabéns! Você descobriu o numero secreto  ${numeroSecreto}, com ${tentativas} tentativas!`);
//} else {
//    alert(`Parabéns! Você descobriu o numero secreto  ${numeroSecreto}, com ${tentativas} tentativa!`);
//}
