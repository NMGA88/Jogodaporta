let porta = document.querySelector('#porta')
let quadrado = document.querySelector('#quadrado')

function pular (){
    if (porta.classList != 'animar'){
        porta.classList.add('animar')
    }

    setTimeout(function(){
        porta.classList.remove('animar')
    }, 500)
}



var testarColisao = setInterval( function(){

var TopoPorta = parseInt (
    window.getComputedStyle(porta).getPropertyValue('top')
)

var EsquerdaQuadrado = parseInt (
    window.getComputedStyle(quadrado).getPropertyValue('left')
)

if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && TopoPorta >=130) {
    quadrado.style.animation= 'none'
    quadrado.style.display = 'none'
    


    alert('COLISÃO! PERDESTE!\nQuantas passagens conseguiste completar?\n\n[ 0 a 100 - FRACO ]\n[ 101 a 200 - SATISFATÓRIO ]\n[ 201 a 300 - FORMIDÁVEL ]\n[ >301 - MESTRE DO CLICK ]\n\nPara jogar novamente clica em OK e atualiza a página (F5)!')
    
} 

}, 10)

