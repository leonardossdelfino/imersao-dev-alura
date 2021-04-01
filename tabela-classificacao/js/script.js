// Objetos jogadores
var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 11
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

// calculo de pontos
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

// Montar a tabela, pegando os dados dos objetos
var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for(var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

// Adiciona uma vitória + 3 pontos
function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

// Adiciona um empate + 1 ponto
function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

// Adiciona uma derrota - 1 ponto
function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos--
    exibirJogadoresNaTela(jogadores)
}