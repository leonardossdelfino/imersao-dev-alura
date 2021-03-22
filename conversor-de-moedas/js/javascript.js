function calcular() {
    var valorEmReal
    let valorEmDolar = document.getElementById("inputDolar").value

    valorEmReal = valorEmDolar * 5.53

    var resultado = document.getElementById("resultado"). value = valorEmReal.toFixed(2)
}
