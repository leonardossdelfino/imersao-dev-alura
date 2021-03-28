function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme').value
    
    if(campoFilmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(campoFilmeFavorito)
    } else {
        alert("Imagem inválida!")
    }

    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}