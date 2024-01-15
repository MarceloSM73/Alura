function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  let numero = prompt("Informe um número para calcular o seu fatorial:");
  let resultado = calcularFatorial(numero);
  alert(`O fatorial de ${numero} é ${resultado}`);