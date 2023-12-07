let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function botaoConsole(){
    console.log("O botão foi clicado.");
}

function botaoAlert(){
    alert("Eu amo JS");
}

function botaoPrompt(){
    let nomeCidade = prompt("Escreva o nome de uma cidade do Brasil:");
    alert(`Estive em ${nomeCidade} e lembrei de você!`);
}

function botaoSoma(){
    let primeiroNumero = prompt("Digite o primeiro numero:");
}