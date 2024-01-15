function calculoAreaePerimetroRetangular(){
let largura = prompt("Digite a largura da sala em m:");
let comprimento = prompt("Digite o comprimento da sala em m:");
let area = largura * comprimento;
let perimetro = (largura * 2) + (comprimento * 2);
alert (`A área da sala é igual a ${area} m² e o perímetro igual a ${perimetro} m.`)
}
calculoAreaePerimetroRetangular();