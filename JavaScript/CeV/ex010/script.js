let values = [];
function btnAdd(){
    let numInp = Number(document.querySelector("#num").value);
    if (numInp == "" || numInp <= 0 || numInp >= 101) {
        window.alert("Digite um número válido!");
    } else if (values.indexOf(numInp) != -1) {
        window.alert("Esse número já foi adicionado!")
    } else {
        let item = document.createElement("option");
        item.text = `Número ${numInp} adicionado!`;
        document.querySelector("#list").appendChild(item);
        document.querySelector("#res").innerHTML = "";
        values.push(numInp);
    }
    document.querySelector("#num").value = "";
    document.querySelector("#num").focus();
}
function btnRes(){
    let area = document.querySelector("#list");
    if (area.innerHTML == "") {
        window.alert("Adicione algum valor!");
    } else {
        values.sort((a, b) => a - b);
        let res = document.querySelector("#res");
        let som = 0;
        for (let c = 1; c <= values.length; c++) {
            som += values[c - 1];
        }
        let med = som / values.length;
        res.innerHTML = `<p>Ao todo, temos ${values.length} números cadastrados.</p><p>O maior valor adicionado foi ${values[values.length - 1]}.</p><p>O menor valor adicionado foi ${values[0]}.</p><p>Somando todos os valores, temos ${som}.</p><p>A média dos valores digitados é ${med}.</p>`;
    }
}
function btnClean(){
    document.querySelector("#list").innerHTML = "";
    document.querySelector("#res").innerHTML = "";
    values = [];
}