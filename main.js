function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

/*
function tocaSomRound(){
    document.querySelector("#som_tecla_round").play();
}
document.querySelector(".tecla_round").onclick = tocaSomRound;

function tocaSomOne(){
    document.querySelector("#som_tecla_one").play();
}
document.querySelector(".tecla_one").onclick = tocaSomOne;

function tocaSomFight(){
    document.querySelector("#som_tecla_fight").play();
}
document.querySelector(".tecla_fight").onclick = tocaSomFight;

function tocaSomRadouken(){
    document.querySelector("#som_tecla_radouken").play();
}
document.querySelector(".tecla_radouken").onclick = tocaSomRadouken;

function tocaSomSho(){
    document.querySelector("#som_tecla_sho").play();
}
document.querySelector(".tecla_sho").onclick = tocaSomSho;

function tocaSomTatsu(){
    document.querySelector("#som_tecla_tatsu").play();
}
document.querySelector(".tecla_tatsu").onclick = tocaSomTatsu;

function tocaSomSonic(){
    document.querySelector("#som_tecla_sonic").play();
}
document.querySelector(".tecla_sonic").onclick = tocaSomSonic;

function tocaSomYoga(){
    document.querySelector("#som_tecla_yoga").play();
}
document.querySelector(".tecla_yoga").onclick = tocaSomYoga;
*/
const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

while (contador < listaDeTeclas.length) {
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = '#som_' + efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}



