function contar(){
    var numIni = Number(document.querySelector("#ini").value);
    var numFim = Number(document.querySelector("#fim").value);
    var numPas = Number(document.querySelector("#pas").value);
    var result = document.querySelector("#res");
    if (numIni == "" || numFim == "" || numPas == "") {
        window.alert("Preencha todos os campos!");
    } else {
        result.innerHTML = "";
        if (numIni < numFim) {
            while (numIni <= numFim) {
                result.innerHTML += `${numIni} | `;
                numIni += numPas;
            }
        } else {
            while (numIni >= numFim) {
                result.innerHTML += `${numIni} | `;
                numIni -= numPas;
            }
        }
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 3);
    }
}