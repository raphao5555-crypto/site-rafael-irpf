var areaTexto = document.getElementById('area-texto');
var botaoEnviar = document.querySelector('.botao-rosa');
var botaoLixo = document.querySelector('.botao-lixo');
var resultado = document.getElementById('resultado');
var resultadoAliquota = document.getElementById('resultado-2');

function calcularAliquota(salario, ir) {

    if (salario <= 0) {
        return 0;
    }
    return (ir / salario) * 100;
}

function faixaIsento(salario) {
    return 0;
}

function faixa75(salario) {
    return (salario * 0.075) - 158.40;
}

function faixa15(salario) {
    return (salario * 0.15) - 370.40;
}


function faixa225(salario) {
    return (salario * 0.225) - 651.73;
}

function faixa275(salario) {
    return (salario * 0.275) - 884.96;
}



function calcularIRPF(salario) {
    if (salario <= 2112.00) {
        return faixaIsento(salario);
    } else if (salario >= 2112.01 && salario <= 2826.65) {

        return faixa75(salario);
    } else if (salario >= 2826.66 && salario <= 3751.05) {
        return faixa15(salario);
    } else if (salario >= 3751.06 && salario <= 4664.68) {
        return faixa225(salario);
    } else {
        return faixa275(salario);
    }
}

function calcular() {
    var salario = Number(areaTexto.value);

    if (salario === 0) {
        return;
    }

    var imposto = calcularIRPF(salario);
    var aliquota = calcularAliquota(salario, imposto);

    resultado.innerHTML = imposto.toFixed(2);
    resultadoAliquota.innerHTML = aliquota.toFixed(2) + "%";
}

function lixinho() {
    areaTexto.value = "";
    resultado.innerHTML = "";
    resultadoAliquota.innerHTML = "";
}