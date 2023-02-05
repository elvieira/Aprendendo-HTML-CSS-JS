//Variáveis
var nome = prompt("Digite seu nome:");
alert("Bem-vindo " + nome + "!");

//Operadores aritméticos
var num1 = parseInt(prompt("Agora vamos somar dois números! Digite um número para começar:"));
var num2 = parseInt(prompt("Agora digite outro número:"));
var result = (num1 + num2);
alert("A soma dos números é: " + result);

//Outros operadores aritméticos
var num11 = parseInt(prompt("Para calcular a média digite o primeiro valor: "));
var num22 = parseInt(prompt("Agora digite o segundo valor: "));
alert("A média é: " + ((num1 + num2) / 2) + "!");

//Operadores de comparação
var num01 = parseInt(prompt("Digite um número: "));
var num02 = parseInt(prompt("Digite outro número: "));
var result = (num1 + num2) / 2;
alert(result > 5);

//Condicionais
var n1 = parseFloat(prompt("Digite um número: "));
var n2 = parseFloat(prompt("Digite outro número: "));
var resul = (n1 + n2) / 2;
if(resul > 5) {
    alert("Você foi aprovado!")
} else {
    alert("Você foi reprovado!")
}

//Controle de decisão
var inp = parseInt(prompt("Digite um número de 1 a 3: "));
switch (inp) {
    case 1:
        alert("Olá!");
        break;
    case 2:
        alert("Oi!");
        break;
    case 3:
        alert("Hello!");
        break;
    default:
        alert("Digite um número de 1 a 3!");
}

//Estrutura de repetição
var calc = parseInt(prompt("Digite um número para ser multiplicado: "));
var mod = 1;
while (mod <= 100) {
    document.write(calc + " X " + mod + " = " + (calc * mod) + "<br>");
    mod = mod + 1;
    //mod += 1;
    //mod++
}
do {
    document.write(calc + " X " + mod + " = " + (calc * mod) + "<br>");
    mod = mod + 1;
} while (mod <= 100);
for (var i = 1; i <= 100; i++) {
    document.write(calc + " X " + mod + " = " + (calc * mod) + "<br>");
}