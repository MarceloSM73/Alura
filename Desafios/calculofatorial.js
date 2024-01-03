function calculoFatorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
    }

    let numero = prompt("Digite um número para calcular o seu fatorial:");
    let resultado = calculoFatorial(numero);
    alert(`O fatorial de ${numero} é igual a ${resultado}.`);