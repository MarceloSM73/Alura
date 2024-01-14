function converterdolar(){
    let valor = prompt ("Digite o valor em dolar:");
    let dolar = 4.80;
    let resultado = valor * dolar;
    alert (`Você tem R$ ${resultado.toFixed(2)} reais`);

}
converterdolar();