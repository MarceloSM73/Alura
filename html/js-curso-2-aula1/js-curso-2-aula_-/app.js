function calculoFatorial(){
    let num = prompt("Digite um número para calcular o seu fatorial");
    while (num>0){
        num = num*fatorial;
        fatorial--;
    return num;
    }
    alert(`O fatorial de ${num} é ${fatorial}.`);
}
calculoFatorial();
