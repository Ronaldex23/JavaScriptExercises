window.onload = carregar

function carregar(){
    let hora = new Date()
    let horaAtual = hora.getHours()
    var text = document.getElementById('text')
    var img = document.getElementById('img')
    
    text.innerHTML = `Agora são ${horaAtual} horas`
    
    if(horaAtual >= 0 && horaAtual < 5){
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#1c1c1cff'
    }
    else if(horaAtual < 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#9fc6e2ff'
    }
    else if(horaAtual < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#d1a492ff'
    }
    else{
        img.src = 'img/noite.png'
        document.body.style.background = '#0c2b4a'
    }
}
