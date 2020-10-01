let canvas = document.getElementById("cobrinha");
let contexto = canvas.getContext("2d");
let box = 32;

let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}


let direcao = "direita";

function criarBG(){
    contexto.fillStyle = "lightgreen";
    contexto.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
    for(i = 0; i < cobrinha.length; i++){
        contexto.fillStyle = "green";
        contexto.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}


document.addEventListener("keydown", update);

function update(event){
    if(event.keyCode == 37 && direcao != "direita") direcao = "esquerda";
    if(event.keyCode == 38 && direcao != "baixo") direcao = "cima";
    if(event.keyCode == 39 && direcao != "esquerda") direcao = "direita";
    if(event.keyCode == 40 && direcao != "cima") direcao = "baixo";
}

function iniciarJogo(){
    if(cobrinha[0].x > 15*box &&  direcao == "direita") cobrinha[0].x = 0;
    if(cobrinha[0].x < 0 &&  direcao == "esquerda") cobrinha[0].x = 16*box;
    if(cobrinha[0].y > 15*box &&  direcao == "baixo") cobrinha[0].y = 0;
    if(cobrinha[0].y > 0 &&  direcao == "cima") cobrinha[0].y = 16*box;

    criarBG();
    criarCobrinha();

    let cobrinhax = cobrinha[0].x;
    let cobrinhay = cobrinha[0].y;

    if( direcao == "direita" ) cobrinhax += box;
    if( direcao == "esquerda" ) cobrinhax -= box;
    if( direcao == "baixo" ) cobrinhay += box;
    if( direcao == "cima" ) cobrinhay -= box;
     
    cobrinha.pop();

    let novacabeca = {
        x: cobrinhax,
        y: cobrinhay
    }

    cobrinha.unshift(novacabeca);
}

let jogo = setInterval(iniciarJogo, 100);


