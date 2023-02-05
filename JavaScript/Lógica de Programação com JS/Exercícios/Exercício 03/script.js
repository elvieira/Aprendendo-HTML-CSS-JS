var num1 = parseInt(prompt("Jogador 1, digite um número: "));
var num2 = parseInt(prompt("Jogador 2, digite um número: "));
if (num1 === num2) {
    var dn = parseInt(Math.random() * 2);
    if (dn === 0) {
        alert("Temos um empate! No desempate aleatório o Jogador 1 foi o vencedor!");
    } else {
        alert("Temos um empate! No desempate aleatório o Jogador 2 foi o vencedor!");
    }
} else if (num1 > num2) {
    alert("Jogador 1 ganhou!");
} else {
    alert("Jogador 2 ganhou!");
}