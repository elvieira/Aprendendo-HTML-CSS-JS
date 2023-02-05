alert("Digitem um número cada. Será sorteado o modo de jogo, se quem vai ganhar vai ser quem digitou o maior valor ou o menor valor.");
var num1 = parseInt(prompt("Jogador 1, digite seu número: "));
var num2 = parseInt(prompt("Jogador 2, digite seu número: "));
var mode = parseInt(Math.random() * 2);

if (num1 === num2) {
    alert("O jogo empatou!");
} else if ((mode === 0 && num1 > num2) || (mode === 1 && num1 < num2)) {
    alert("O jogador 1 ganhou!");
} else {
    alert("O jogador 2 ganhou!");
}