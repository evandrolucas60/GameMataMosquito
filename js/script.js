
var altura = 0
var largura = 0
var vidas = 1
var tempo = 50

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //2000
    criarMosquitoTempo = 2000
}else if (nivel === 'dificil'){
    //1000
    criarMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    //750
    criarMosquitoTempo = 750
}




function ajustaTamanhoPalcoJogo(){
 altura = window.innerHeight
 largura = window.innerWidth

 console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo--
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href ='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
   
}, 1000)


/*Posição aleatória na tela
---------------------------------------*/
function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
           window.location.href = 'fim_de_jogo.html'

        } else{

            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

        vidas++
        }
    
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    //operador ternario condição
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    //Criar elemento Html
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
       this.remove()
    }
    

    document.body.appendChild(mosquito)

    tamanhoAleatorio()
}




/*Tamanho dos mosquitos
---------------------------------------*/
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)
    
    switch(classe){
        case 0:
            return 'mosquito1' //não usa break quando se há return
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }       
}




/*Lado A Lado B
---------------------------------------*/
function ladoAleatorio() {
    var classe = Math.floor(Math.random()*2)
    
    switch(classe){
        case 0:
            return 'ladoA' 
        case 1:
            return 'ladoB'
     
    }       
}

 