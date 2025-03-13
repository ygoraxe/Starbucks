let imagem = document.querySelector(".imagem-sorvete-verde")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor){
    circulo.style.background = cor
}

