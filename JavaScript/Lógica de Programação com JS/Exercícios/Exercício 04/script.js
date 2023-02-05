var nota1 = parseFloat(prompt("Digite sua primeira nota: "));
var nota2 = parseFloat(prompt("Digite sua segunda nota: "));
var nota3 = parseFloat(prompt("Digite sua terceira nota: "));
var media = (nota1 + nota2 + nota3) / 3;

if (nota1 === 0 || nota2 === 0 || nota3 === 0 || media <= 5) {
    alert("Você foi reprovado!")
} else {
    alert("Você foi aprovado!")
}