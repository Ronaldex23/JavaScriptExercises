//botao para adicionar
let btnAdd = document.querySelector('#btn-add')
btnAdd.addEventListener('click', adicionarNum)


//section contendo div Valores
let containerResultado = document.querySelector('#resultado')
//divValores
let containerValores = document.createElement('div')
containerValores.id = 'valores'
containerValores.innerHTML = ''

//listaValores
let lista = document.createElement('select')
let listaNum = []

//VALIDACAO
function validaNum(n){
    if(isNaN(n) || n > 100 || n < 1){
        return false
    } else {
        return true
    }
}
function verificaLista(n, l){
    return l.includes(n)
}

//BLOCO PRINCIPAL
function adicionarNum(){
    const numero = Number(document.querySelector('#num').value)

    if(!validaNum(numero)){
        alert('Por favor, insira um número válido entre 1 e 100.')
        numero.focus
        return
    }
    else if(verificaLista(numero, listaNum)){
        alert('Valor já foi digitado anteriormente')
        numero.focus
        return
    }

    listaNum.push(numero)
    
    //exibir valor na tela
    let option = document.createElement('option')
    option.text = `${numero}`
    lista.size = listaNum.length
    lista.appendChild(option)

    //Na primeira digitação:
    // 1 - coloque a selectLista < divValores < sectionResultado
    if(!containerValores.contains(lista)){
        containerValores.appendChild(lista)
        containerResultado.appendChild(containerValores)
        containerResultado.className = 'bloco'
    }
    // 2 - exibir o botao para finalizar
    if(!document.querySelector('#btn-final')){
        let btnFinalizar = document.createElement('button')
        containerValores.appendChild(btnFinalizar)
        btnFinalizar.id = 'btn-final'
        btnFinalizar.textContent = 'Finalizar'
        btnFinalizar.addEventListener('click', Finalizar)
    }

    // resetar input para a próxima digitação e focar
    document.querySelector('#num').value = ''
    document.querySelector('#num').focus()
}

// ANALISE E OPERACOES
function calcularMedia(l){
    return (Somar(l) / l.length).toFixed(2)
}

function calcularMaior(l){
    let maior = l[0]
    for(let i = 1; i < l.length; i++){
        if(maior < l[i]){
            maior = l[i]
        }
    }
    return maior
}

function calcularMenor(l){
    let menor = l[0]
    for(let i = 1; i < l.length; i++){
        if(menor > l[i]){
            menor = l[i]
        }
    }
    return menor
}

function Somar (l){
    let soma = 0
    for(let i = 0; i < l.length; i++){
        soma += l[i]
    }
    return soma
}

function Finalizar(){
    let analise = document.createElement('div')
    let containerAnalise = document.querySelector('#divisao')
    containerAnalise.appendChild(analise)
    analise.id = 'analise'
    analise.innerHTML = ''
    
    analise.innerHTML += `<p>Ao todo, temos <strong>${listaNum.length}</strong> números cadastrados</p>
    <p>O maior valor informado é <strong>${calcularMaior(listaNum)}</strong></p>
    <p>O menor valor informado é <strong>${calcularMenor(listaNum)}</strong></p>
    <p>Somandos os termos, temos <strong>${Somar(listaNum)}</strong></p>
    <p>A média dos valores digitados é <strong>${calcularMedia(listaNum)}</strong></p>`
}
