function mueveReloj(){
    let momentoActual = new Date()
    let hora = momentoActual.getHours()
    let minuto = momentoActual.getMinutes()
    let segundo = momentoActual.getSeconds()

    let horaImprimible = hora + " : " + minuto + " : " + segundo

    horaActual[1] = hora
    horaActual[2] = minuto
    horaActual[3] = segundo
    horaActual[4] = horaImprimible
    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()",1000)
}

function inicio(){
    
}

function final(){
    
}

function cambiar(numero){
    if (numero == 1) {
        if (mesas.mesa1.estado == true) {
            document.getElementById('img_m1').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa1.estado = false
            mesas.mesa1.horaFinal = horaActual[4]
            document.getElementById('hf1').innerHTML = `<h3>Hora final: ${mesas.mesa1.horaFinal}</h3>`
            mesas.mesa1.horaf = horaActual[1]
            if (mesas.mesa1.horaf == mesas.mesa1.horai) {
                document.getElementById('total1').innerHTML = `<h3>Total: ${mesas.mesa1.total} pesos</h3>`
            } else {
                dif = mesas.mesa1.horaf - mesas.mesa1.horai
                mesas.mesa1.total = 50 * dif
                document.getElementById('total1').innerHTML = `<h3>Total: ${mesas.mesa1.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m1').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa1.estado = true
            mesas.mesa1.horaInicial = horaActual[4]
            document.getElementById('hi1').innerHTML = `<h3>Hora inicial: ${mesas.mesa1.horaInicial}</h3>`
            document.getElementById('hf1').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total1').innerHTML = `<h3>Total:</h3>`
            mesas.mesa1.horai = horaActual[1]
        }
    } else if (numero == 2) {
        if (mesas.mesa2.estado == true) {
            document.getElementById('img_m2').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa2.estado = false
            mesas.mesa2.horaFinal = horaActual[4]
            document.getElementById('hf2').innerHTML = `<h3>Hora final: ${mesas.mesa2.horaFinal}</h3>`
            mesas.mesa2.horaf = horaActual[1]
            if (mesas.mesa2.horaf == mesas.mesa2.horai) {
                document.getElementById('total2').innerHTML = `<h3>Total: ${mesas.mesa2.total} pesos</h3>`
            } else {
                dif = mesas.mesa2.horaf - mesas.mesa2.horai
                mesas.mesa2.total = 50 * dif
                document.getElementById('total2').innerHTML = `<h3>Total: ${mesas.mesa2.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m2').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa2.estado = true
            mesas.mesa2.horaInicial = horaActual[4]
            document.getElementById('hi2').innerHTML = `<h3>Hora inicial: ${mesas.mesa2.horaInicial}</h3>`
            document.getElementById('hf2').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total2').innerHTML = `<h3>Total:</h3>`
            mesas.mesa2.horai = horaActual[1]
        }
    } else if (numero == 3) {
        if (mesas.mesa3.estado == true) {
            document.getElementById('img_m3').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa3.estado = false
            mesas.mesa3.horaFinal = horaActual[4]
            document.getElementById('hf3').innerHTML = `<h3>Hora final: ${mesas.mesa3.horaFinal}</h3>`
            mesas.mesa3.horaf = horaActual[1]
            if (mesas.mesa3.horaf == mesas.mesa3.horai) {
                document.getElementById('total3').innerHTML = `<h3>Total: ${mesas.mesa3.total} pesos</h3>`
            } else {
                dif = mesas.mesa3.horaf - mesas.mesa3.horai
                mesas.mesa3.total = 50 * dif
                document.getElementById('total3').innerHTML = `<h3>Total: ${mesas.mesa3.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m3').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa3.estado = true
            mesas.mesa3.horaInicial = horaActual[4]
            document.getElementById('hi3').innerHTML = `<h3>Hora inicial: ${mesas.mesa3.horaInicial}</h3>`
            document.getElementById('hf3').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total3').innerHTML = `<h3>Total:</h3>`
            mesas.mesa3.horai = horaActual[1]
        }
    } else if (numero == 4) {
        if (mesas.mesa4.estado == true) {
            document.getElementById('img_m4').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa4.estado = false
            mesas.mesa4.horaFinal = horaActual[4]
            document.getElementById('hf4').innerHTML = `<h3>Hora final: ${mesas.mesa4.horaFinal}</h3>`
            mesas.mesa4.horaf = horaActual[1]
            if (mesas.mesa4.horaf == mesas.mesa4.horai) {
                document.getElementById('total4').innerHTML = `<h3>Total: ${mesas.mesa4.total} pesos</h3>`
            } else {
                dif = mesas.mesa4.horaf - mesas.mesa4.horai
                mesas.mesa4.total = 50 * dif
                document.getElementById('total4').innerHTML = `<h3>Total: ${mesas.mesa4.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m4').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa4.estado = true
            mesas.mesa4.horaInicial = horaActual[4]
            document.getElementById('hi4').innerHTML = `<h3>Hora inicial: ${mesas.mesa4.horaInicial}</h3>`
            document.getElementById('hf4').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total4').innerHTML = `<h3>Total:</h3>`
            mesas.mesa4.horai = horaActual[1]
        }
    } else if (numero == 5) {
        if (mesas.mesa5.estado == true) {
            document.getElementById('img_m5').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa5.estado = false
            mesas.mesa5.horaFinal = horaActual[4]
            document.getElementById('hf5').innerHTML = `<h3>Hora final: ${mesas.mesa5.horaFinal}</h3>`
            mesas.mesa5.horaf = horaActual[1]
            if (mesas.mesa5.horaf == mesas.mesa5.horai) {
                document.getElementById('total5').innerHTML = `<h3>Total: ${mesas.mesa5.total} pesos</h3>`
            } else {
                dif = mesas.mesa5.horaf - mesas.mesa5.horai
                mesas.mesa5.total = 50 * dif
                document.getElementById('total5').innerHTML = `<h3>Total: ${mesas.mesa5.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m5').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa5.estado = true
            mesas.mesa5.horaInicial = horaActual[4]
            document.getElementById('hi5').innerHTML = `<h3>Hora inicial: ${mesas.mesa5.horaInicial}</h3>`
            document.getElementById('hf5').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total5').innerHTML = `<h3>Total:</h3>`
            mesas.mesa5.horai = horaActual[1]
        }
    } else if (numero == 6) {
        if (mesas.mesa6.estado == true) {
            document.getElementById('img_m6').src = 'assets/img/mesa_d.jpeg'
            mesas.mesa6.estado = false
            mesas.mesa6.horaFinal = horaActual[4]
            document.getElementById('hf6').innerHTML = `<h3>Hora final: ${mesas.mesa6.horaFinal}</h3>`
            mesas.mesa6.horaf = horaActual[1]
            if (mesas.mesa6.horaf == mesas.mesa6.horai) {
                document.getElementById('total6').innerHTML = `<h3>Total: ${mesas.mesa6.total} pesos</h3>`
            } else {
                dif = mesas.mesa6.horaf - mesas.mesa6.horai
                mesas.mesa6.total = 50 * dif
                document.getElementById('total6').innerHTML = `<h3>Total: ${mesas.mesa6.total} pesos</h3>`
            }
        } else {
            document.getElementById('img_m6').src = 'assets/img/mesa_a.jpeg'
            mesas.mesa6.estado = true
            mesas.mesa6.horaInicial = horaActual[4]
            document.getElementById('hi6').innerHTML = `<h3>Hora inicial: ${mesas.mesa6.horaInicial}</h3>`
            document.getElementById('hf6').innerHTML = `<h3>Hora final:</h3>`
            document.getElementById('total6').innerHTML = `<h3>Total:</h3>`
            mesas.mesa6.horai = horaActual[1]
        }
    }
}

let horaActual = [1,2,3,4]

let mesas = {
    mesa1: {
        horaInicial: 0,
        horaFinal: 0,
        total: 50,
        estado: false,
        horai: 0,
        horaf: 0
        
    },
    mesa2: {
        horaInicial: 0,
        horaFinal: 0,
        total: 0,
        estado: false,
        horai: 0,
        horaf: 0
    },
    mesa3: {
        horaInicial: 0,
        horaFinal: 0,
        total: 0,
        estado: false,
        horai: 0,
        horaf: 0
    },
    mesa4: {
        horaInicial: 0,
        horaFinal: 0,
        total: 0,
        estado: false,
        horai: 0,
        horaf: 0
    },
    mesa5: {
        horaInicial: 0,
        horaFinal: 0,
        total: 0,
        estado: false,
        horai: 0,
        horaf: 0
    },
    mesa6: {
        horaInicial: 0,
        horaFinal: 0,
        total: 0,
        estado: false,
        horai: 0,
        horaf: 0
    }
}

