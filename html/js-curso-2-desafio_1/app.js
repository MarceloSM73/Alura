let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibirConsole(){
    console.log("O botão foi clicado.");
}

function exibirAlert(){
    alert("Eu amo JS");
}

function exibirPrompt(){
    let nomeCidade = prompt("Escreva o nome de uma cidade do Brasil:");
    alert(`Estive em ${nomeCidade} e lembrei de você!`);
}

function somaNumeros(){
    let primeiroNumero = parseInt(prompt("Digite o primeiro numero:"));
    let segundoNumero = parseInt(prompt("Digite o segundo numero:"));
    let resultado = primeiroNumero + segundoNumero;
    alert(`A soma entre ${primeiroNumero} e ${segundoNumero} é igual a ${resultado}.`);
}