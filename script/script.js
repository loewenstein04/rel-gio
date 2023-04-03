function relogio() {
    const elementoRelogio = document.querySelector('.relogio')
    const horaAtual = new Date()
    const horas = horaAtual.getHours()
    const minutos = horaAtual.getMinutes()
    const segundos = horaAtual.getSeconds()
    //Configuração do Tempo

    const formatoHoras = horas.toString().padStart(2 /*Número de carateries que vão aparecer*/, "0")
    const formatoMinutos = minutos.toString().padStart(2, "0")
    const formatoSegundo = segundos.toString().padStart(2, "0")

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundo}`

    if (horas < 12) {
        document.body.style.background = '#90f3f5'
    } else if (horas < 18) {
        document.body.style.background = '#f2d740'
    } else if (horas < 19) {
        document.body.style.background = '#ff8c00'
    } else {
        document.body.style.background = '#011c5ce4'
    }
}
setInterval(relogio, 1000)