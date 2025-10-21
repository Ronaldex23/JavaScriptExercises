let btnGerar = document.querySelector('#btn-tabuada')
btnGerar.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    let numero = parseInt(document.querySelector('#num-tabuada').value)
    let containerResultado = document.querySelector('#resultado')
    containerResultado.innerHTML = ''

    if(isNaN(numero) || numero <=0){
        alert('Por favor, insira um número válido.')
        return
    }
    else{
        let tabuada = document.createElement('select')
        tabuada.size = 10
        tabuada.id = 'tabuada'

        for(let i = 1; i <= 10; i++){
            let option = document.createElement('option')
            option.text = `${numero} x ${i} = ${numero*i}`
            tabuada.appendChild(option)
        }
        containerResultado.appendChild(tabuada)
    }
}