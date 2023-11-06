function tocasom(idelementoaudio){
    document.querySelector(idelementoaudio).play();
}
const listadeteclas = document.querySelectorAll(".tecla");

let contador = 0;
while (contador < listadeteclas.length){
    const efeito = listadeteclas[contador].classList[1];
    const idaudio = "#som_"+efeito;
    listadeteclas[contador].onclick = function(){
        tocasom(idaudio)
    }
    contador = contador + 1;
}