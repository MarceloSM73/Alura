function calculoImc(){

    let altura = prompt("Digite a sua altura (M):");
    
    let peso = prompt("Digite o seu peso (Kg):");
    
    let imc = peso / (altura * altura);
    
    alert(`Seu IMC é: ${imc}.`);
    
    }
    
    calculoImc();