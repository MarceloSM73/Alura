function areaeperimetrocircular(){
let raio = prompt("Informe o raio da sala em m:");
let pi = 3.14;
let area = pi * (raio * raio);
let perimetro = (2 * pi) * raio;
alert (`A área da sala é igual a ${area.toFixed(2)} m² e o perímetro igual a ${perimetro.toFixed(2)} m.`)
}
areaeperimetrocircular();