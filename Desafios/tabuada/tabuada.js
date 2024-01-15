function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      alert(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = prompt("Informe um número para calcular a tabuada:");
  tabuada(numero);