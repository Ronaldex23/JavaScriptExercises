var btnVerificar = document.querySelector('#btn-verificar')
btnVerificar.addEventListener('click', verificar)

function verificar() {
    const anoAtual = new Date().getFullYear();
    const data_nasc = document.querySelector('#data-nascimento').value
    const sexo = document.querySelector('input[name="sexo"]:checked').value
    let img = document.createElement('img')

    if(parseInt(data_nasc) && data_nasc.length == 4 && data_nasc > 0 && data_nasc < anoAtual) {
        let idade = anoAtual - (data_nasc)
        
        if(sexo === 'Masculino') {
            if(idade <= 12){
                img.setAttribute('src', 'img/crianca-m.jpg')
            } else if(idade <= 20){
                img.setAttribute('src', 'img/jovem-m.png')
            } else if(idade <= 59){
                img.setAttribute('src', 'img/adulto-m.jpeg')
            } 
            else{
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
            
        }
        else{ //Feminino
            if(idade <= 12){
                img.setAttribute('src', 'img/crianca-f.jpg')
            } else if(idade <= 20){
                img.setAttribute('src', 'img/jovem-f.png')
            } else if(idade <= 59){
                img.setAttribute('src', 'img/adulto-f.jpg')
            } 
            else{
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }

        document.querySelector('#resultado').innerHTML = `Detectamos ${sexo} com ${idade} anos`
        document.querySelector('#resultado').appendChild(img)
    }
    else{
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
}