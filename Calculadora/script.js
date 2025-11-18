'use strict';

//Variáveis
const btnNum = document.querySelectorAll('.btn-num');
const btnCalcular = document.querySelector('#btn-igual');
const btnAcao = document.querySelectorAll('.btn-acao');
const btnLimparDigito = document.querySelector('#btn-backspace');
const btnLimparTudo = document.querySelector('#btn-CE');
const Visor = document.querySelector('#exibicao');

let n1, n2;
let operacao = '';

//Eventos
btnCalcular.addEventListener('click', Calcular);
btnLimparDigito.addEventListener('click', LimparUltimoDigito);
btnLimparTudo.addEventListener('click', LimparTudo);
btnNum.forEach(btn => btn.addEventListener('click', Inserir));

btnAcao.forEach(btn => btn.addEventListener('click', function(n){
    if(UltimoDigitoEOperacao()){
        LimparUltimoDigito();
    }
    operacao = n.target.textContent;
    Inserir(n);
}));

//Funções
function UltimoDigitoEOperacao(){
    const ultimoCaracter = Visor.textContent.slice(-1);
    return ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/';
}

function Inserir(n){
    //exibir número no visor
    Visor.textContent === '0' ?  Visor.textContent = n.target.textContent : Visor.textContent += n.target.textContent;
    //armazenar número na variável correta
    ArmazenarNumero(Visor.textContent);
}

function ArmazenarNumero(numero){
    operacao === '' ? n1 = parseFloat(numero) : n2 = parseFloat(numero.split(operacao)[1]);
    console.log(`n1: ${n1} | n2: ${n2} | operação: ${operacao}`);
}

function LimparUltimoDigito(){
    if(Visor.textContent.length > 1){
        //recorte do número exibido no visor, removendo o último dígito
        Visor.textContent = Visor.textContent.slice(0, -1);
        ArmazenarNumero(Visor.textContent);
    }
    else{ //Limpar o último dígito e outros componentes
        LimparTudo();
    }
}

function LimparTudo(){
    n1 = null;
    n2 = null;
    operacao = '';
    Visor.textContent = '0';
}

function PodeCalcular(){
    if(operacao === '') {
        return alert('Necessário inserir uma operação válida!');
    } else if (n1 === undefined || n1 === null || isNaN(n1) || n2 === undefined || n2 === null || isNaN(n2)) { 
        LimparTudo();
        return alert('Um dos números não foi inserido! Tente novamente.');
    } else if(n2 === 0 && operacao === '/'){
        LimparTudo();
        return alert('Divisão por zero não é permitida! Tente novamente.');
    } else {
        return true;
    }
}

function Calcular(){
    let  resultado;
    
    if(PodeCalcular()){
        const somar = (x = 0, y) => x + y;
        const subtrair = (x = 0, y) => x - y;
        const multiplicar = (x = 1, y) => x * y
        const dividir = (x = 1, y) => (x / y).toFixed(2);

        switch (operacao){
            case '+': resultado = somar(n1, n2); break;
            case '-': resultado = subtrair(n1, n2); break;
            case '*': resultado = multiplicar(n1, n2); break;
            case '/': resultado = dividir(n1, n2); break;
        }
        
        Visor.textContent = ExibirResultado(resultado);
    }
}

function ExibirResultado(resultado){
    operacao = '';
    n1 = resultado;
    n2 = 0;
    const res = `${resultado}`;
    console.log(res.length);
    if(res.length > 9){
        return `${res.slice(0, 1)},${res.slice(1, 6)}e${res.length - 1} `;
    } else {
        return res;
    }
}