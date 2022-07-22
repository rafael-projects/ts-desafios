"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTot = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTot += soma;
        campoSaldo.innerHTML = saldoTot.toString();
        limparSaldo();
    }
}
function limparCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTot = 0;
        campoSaldo.innerHTML = saldoTot.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
