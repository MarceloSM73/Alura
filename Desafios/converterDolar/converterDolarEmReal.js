function converterDolarEmReal(){
    let valorEmDolar = prompt ("Digite o valor em dolar:");
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    alert (`Você tem R$ ${valorEmReal.toFixed(2)} reais`);

}
converterDolarEmReal();